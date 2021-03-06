import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dashboard from "./Dashboard";
import SignUp from "./signup";
import SignIn from "./signin";
import Checkout from "./checkout";
import SignInSide from "./signinside";
import { BrowserRouter as Router} from "react-router-dom";
import Main from "./main";

ReactDOM.render(
  <React.StrictMode>
     <Router>
         <Main/>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
