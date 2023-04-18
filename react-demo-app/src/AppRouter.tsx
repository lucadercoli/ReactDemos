import React, { CSSProperties } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ReduxForm from './views/ReduxForm';
import TodoList from './views/TodoList';
import Topics from './views/Topics';
import UserDetails from './views/UserDetails';
import UserDetailsFunct from './views/UserDetailsFunct';
import UserList from './views/UserList';
import UserListClass from './views/UserListClass';

const AppRouter: React.FC = (props) => {
    const navBarStyle: CSSProperties = {
        backgroundColor: "darkgoldenrod",
        height: "50px"
    };

    return(<div className='container'>
        <div className='row' style={ navBarStyle }>
            <div className='col-12'>
                <Link className='btn btn-primary' to="/">HOME</Link>
                <Link className='btn btn-warning' to="/userlist">Users</Link>
                <Link className='btn btn-danger' to="/topics">Topics</Link>
                <Link className='btn btn-success' to="/todos">Todos</Link>
                <Link className='btn btn-success' to="/reduxform">Redux Form</Link>
                <Link className='btn btn-secondary' to="/about">About ...</Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/userlist" component={ UserList } />
                    <Route path="/topics" component={ Topics } />
                    <Route path="/todos" component={ TodoList } />
                    <Route path="/reduxform" component={ ReduxForm } />
                    <Route path="/userdetails/:id/code/:pluto" component={ UserDetails } />
                    <Route path="/userdetailsf/:id/code/:pluto" component={ UserDetailsFunct } />
                    <Route path="/about" component={ About } />
                    <Route component={ NotFound } />  {/*   Fallback  */}
                </Switch>
            </div>
        </div>
    </div>);
}

export default AppRouter;