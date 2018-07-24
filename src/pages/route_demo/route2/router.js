import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './../route1/Main';
import About from './../route1/about';
import Topic from './../route1/topic';

export default class IRoute extends React.Component{
  render(){
    return(
      <Router>
        <Home>
          <Route path='/main' render={()=>{
            return(<Main>
                <Route path='/main/a' component={About}></Route>
            </Main>);
          }}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topics' component={Topic}></Route>
        </Home>
      </Router>
    );
  }
}
