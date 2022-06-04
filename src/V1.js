import React from "react";
import reactRouterDom from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from react-router-dom;

export default function App(){
  const professions = [
    {
      id: 1,
      title: 'Engineers'
    },
    {
      id: 2,
      title: 'Mathematicians'
    },
    {
      id: 3,
      title: 'Architects'
    },
    {
      id: 4,
      title: 'Project Managers'
    },
  ];

  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/list'>Professionals List</Link>
          </li>
          <li>
            <Link to='/edit'>Edit Groups</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/'>3
          <HomePage/>
        </Route>
        <Route path='/list'>
          <ProList/>
        </Route>
        <Route path='/edit'>
          <EditList/>
        </Route>
      </Switch>
    </Router>
  )
}