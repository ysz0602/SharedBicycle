import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notification';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component{

  render(){
    return(
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={()=>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loadings" component={Loadings} />
                <Route path="/admin/ui/notification" component={Notification} />
                <Route path="/admin/ui/messages" component={Messages} />
                <Route path="/admin/ui/tabs" component={Tabs} />
                <Route path="/admin/ui/gallery" component={Gallery} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path="/order/detail" component={Login} />
        </App>
      </Router>
    );
  }
}
