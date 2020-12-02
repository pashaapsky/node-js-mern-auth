import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>

                <Redirect to="/home" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>

                <Redirect to="/auth"/>
            </Switch>
        )
    }


};