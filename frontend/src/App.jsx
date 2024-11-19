import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { DashBoard } from './DashBoard';
import { SignIn } from './SignIn';
import { Register } from './register';
import { PostLogin } from './postlogin';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<DashBoard></DashBoard>}></Route>
        <Route path = "/signin" element = {<SignIn></SignIn>}></Route>
        <Route path = "/postlogin" element = {<PostLogin></PostLogin>}></Route>
        <Route path = "/signup" element = {<Register></Register>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
