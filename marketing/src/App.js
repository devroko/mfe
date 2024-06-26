import React  from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from "./components/Pricing";

const geerateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default ({history}) => {
    return (
        <div>
            <StylesProvider generateClassName={geerateClassName} >
                <Router history={history}>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}></Route>
                    <Route  path='/' component={Landing}></Route>
                </Switch>
                </Router>
            </StylesProvider>
         </div>
    )
}
