import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import Info from './info';
import About from './../route1/about';
import Topic from './../route1/topic';
import NoMatch from './NoMatch';

export default class IRoute extends React.Component{
  render(){
    return(
      <Router>
        <Home>
          <Switch>
            <Route path='/main' render={()=>
              <Main>
                  <Route path='/main/:value' component={Info}></Route>
              </Main>
            }></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topics' component={Topic}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}
