import Dashboard from '../views/dashboard';

import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import 'react-dropdown/style.css'

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
        </Switch>
    )
}
export default Main;