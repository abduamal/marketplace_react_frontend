import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home.js'
import About from '../components/About.js'
// import NoMatch from '../components/NoMatch.js'


class NavigationContainer extends React.Component {
  // constructor() {
  //
  // }

  render() {
    return(
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </React.Fragment>
    )
  }
}

export default NavigationContainer
