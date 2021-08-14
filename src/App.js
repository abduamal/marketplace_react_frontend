import React from 'react'
import './App.css';
import ShopsContainer from './containers/ShopsContainer'
import NavigationContainer from './containers/NavigationContainer'
import NavigationBar from './components/NavigationBar.js'


class App extends React.Component {
  // constructor() {
  //   super()
  //   // this.mapStateToProps = this.mapStateToProps.bind(this)
  // }

  // componentDidMount() {
  //   this.props.fetchShops({type: 'FETCH_SHOPS', payload: {industry: 'Retail'}})
  // }
  render() {
    return(
      <React.Fragment>
        <NavigationBar/>
        <ShopsContainer/>
        <NavigationContainer/>
      </React.Fragment>
    )
  }

  //gives access to values in from the store as props
  // const mapStateToProps = (state) => {
  //
  // }
}

// connect:
// it takes two arguments: mapStateToProps, (action => {fetchShops}) or {mapDispatchToProps}
// the first argument gives access to the values from the store as props
// the second argument allows changes to be dispatched back
// connect automatically calls dispatch on the return value of fetchShops
// with connect, children and associated components of App can be 'connected' because of the Provider. This means all the children, grandchildren, etc, of App can update the store
export default App;
