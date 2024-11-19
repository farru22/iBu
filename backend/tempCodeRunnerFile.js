var token=jwt.sign({username:username},jwtpassword);//we are signing the token with the jwtpassword and encoding username only
  res.json({
    msg : "User sighned In",
    token:token  //We got our token back now we need to store it in local storage so that when we end our session that token also end itself(temporary storage)
  })