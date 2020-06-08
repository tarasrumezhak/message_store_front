import React from "react";
import {Switch, Route} from "react-router-dom";
import SignInSide from "./signinside";
import SignUpSide from "./signupside";
import Dashboard from "./Dashboard";

export default function Main() {
    return(
        <Switch>
            <Route exact path='/' component={SignInSide} />
            <Route exact path='/register' component={SignUpSide}/>
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    )
}