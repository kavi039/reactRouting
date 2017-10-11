import React from 'react';
import {
    Route,
    Redirect,
    Link
} from 'react-router-dom';

const Private=()=>(
    isAuthenticated?<h1>your welcome</h1>:<Redirect from='/private' to='/login'/>
);

const Login=()=>(<h3>Kindaly login</h3>);
const isAuthenticated=true;
const PrivateRoute=()=>(
    <div>
     <Link to='/private'>Private</Link>
     <Route exact path='/private' component={Private}/>
        <br/>
        <Link to='/login'>Login</Link>
        <Route exact path='/login' component={Login}/>
    </div>
);

export default PrivateRoute;