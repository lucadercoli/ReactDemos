// list of the main Routes
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home  from './Components/Home';
import TicketList from './Components/TicketList';
import About from './Components/About';
import TicketEdit from './Components/TicketEdit';
import TicketDelete from './Components/TicketDelete';
import TicketCreate from './Components/TicketCreate';

export const AppRoutes = 
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/ticketlist' component={ TicketList } />
            <Route path='/about' component={ About } />
            <Route path="/new/" component={TicketCreate} />
            <Route path="/edit/:id" component={TicketEdit} />
            <Route path="/delete/:id" component={TicketDelete} />
            <Route component={ Home } />
        </Switch>
    </React.Fragment>;
