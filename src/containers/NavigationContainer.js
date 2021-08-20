import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home.js'
import About from '../components/About.js'
// import Counter from '../components/Counter.js'

class NavigationContainer extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        {/* <Counter component={Counter}/> */}
      </React.Fragment>
    )
  }
}

export default NavigationContainer
