// list of the main Routes
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from './Components/Home';
import About from './Components/About';

export const AppRoutes = 
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route component={ Home } />
        </Switch>
    </React.Fragment>;
