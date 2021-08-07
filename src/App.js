import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchShops } from './actions/fetchShops'

class App extends React.Component {
  // constructor() {
  //   super()
  //   // this.mapStateToProps = this.mapStateToProps.bind(this)
  // }

  componentDidMount() {
    this.props.fetchShops({type: 'FETCH_SHOPS', payload: {industry: 'Retail'}})
  }
  render() {
    return(
      <div className="App">
        App
      </div>
    )
  }

  //gives access to values in from the store as props
  // const mapStateToProps = (state) => {
  //
  // }
}

//
// it takes two arguments: mapStateToProps, (action => {fetchShops}) or {mapDispatchToProps}
// the first argument gives access to the values from the store as props
// the second argument allows changes to be dispatched back
// connect automatically calls dispatch on the return value of fetchShops
export default connect(null, {fetchShops})(App);
