import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Detail from './pages/Detail/Detail';
export default function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"  component={HomePage}/>
                <Route path="/detail/works/:id" component={Detail}/>
                <Route path="/*">
                    <h3>Page Not Found</h3>
                </Route>
            </Switch>
        </div>
    )
}
