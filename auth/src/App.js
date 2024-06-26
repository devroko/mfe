import React  from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Sigin from './components/Signin'
import Signup from "./components/Signup";
import SignIn from "./components/Signin";

const geerateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({history, onSignIn}) => {
    return (
        <div>
            <StylesProvider generateClassName={geerateClassName} >
                <Router history={history}>
                <Switch>
                    <Route path='/auth/signin'  >
                           <SignIn onSignIn={onSignIn}/>
                     </Route>   
                    <Route path='/auth/signup'>
                            <Signup onSignIn={onSignIn} />
                    </Route>
                </Switch>
                </Router>
            </StylesProvider>
         </div>
    )
}
