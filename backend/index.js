const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")
const app = express();
const jwtpassword = "123456";//this password is needed to verify the token from server side
app.use(express.json());
app.use(cors())
const mongoose = require("mongoose");
mongoose.connect("2"); //Database url

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
});

// const user=new User({
//   name:"farhan",
//   email:"ztejd@example.com",
//   password:"farhan123"
// });

// user.save(); //saving to database

//creating a sigin backend server

app.post("/signup", async function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existUser = await User.findOne({ email: email });

    if (existUser) {
        res.status(400).json({
            error : "User Already exist"
        })
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    })
    var token = jwt.sign({ username: email }, jwtpassword);
    user.save();
    res.json({
        msg : "User Signed up",
        token
    })
   
});


app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const isUser = await User.findOne({
        email: username,
        password: password
    })
    if (!isUser) {
        res.status(403).json({
            error: 'No such user'
        })
        return
    }
    
        var token = jwt.sign({ username: username }, jwtpassword);//we are signing the token with the jwtpassword and encoding username only
        res.json({
            msg: "User sighned In",
            token: token  //We got our token back now we need to store it in local storage so that when we end our session that token also end itself(temporary storage)
        })
        return;

})

app.get("/user", function (req, res) {
    const token = req.headers.authorization; //we need to give that token as a header
    try {
        const decoded = jwt.verify(token, jwtpassword);
        const username = decoded.name;
    } catch (err) { 
        res.status(401).json({
            msg: "Invalid token"
        })
    }
})

app.get('/test', (req, res) => {
    res.json({
        msg: 'Farhan'
    });
})

app.listen(3000, () => {
    console.log('Done Master!')
})
