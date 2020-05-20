import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Main_sr from './pages/SR/Main_sr/Main_sr';
// import Login_sr from './pages/SR/Login_sr/Login_sr';

import Main_yj from './pages/YJ/Main_yj/Main_yj';
import Login_yj from './pages/YJ/Login_yj/Login_yj';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/main_sr" component={Main_sr} />
          <Route exact path="/Login_sr" component={Login_sr} /> */}
          <Route exact path="/main_yj" component={Main_yj} />
          <Route exact path="/" component={Login_yj} />
          

        </Switch>
      </Router>
    )
  }
}

export default Routes;