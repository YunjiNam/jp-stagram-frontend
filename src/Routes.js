import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './pages/SR/Main_sr/Main';
import Main from './pages/YJ/Main/Main';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mains_sr" component={Main} />
          <Route exact path="/mains_yj" component={Main} />

        </Switch>
      </Router>
    )
  }
}

export default Routes;