import React from 'react'
import { connect } from 'react-redux'
// Switch returns the first route that matches the set path when it is wrapped around Route paths
//  - order matters: any dynamic route placed above a specific route will override the specific route and it won't render
import { Route, Switch } from 'react-router-dom'
import { fetchShops } from '../actions/fetchShops'
import ShopInput from '../components/ShopInput'
import Shops from '../components/Shops'
import Shop from '../components/Shop'

class ShopsContainer extends React.Component {
  // constructor() {
  //   super()
  // }


  componentDidMount() {
    // to connect fetchShops to redux store, use props
    this.props.fetchShops()
  }
  render(){
    return(
      <div>
        <Switch>
          <Route path='/shops/new' component={ShopInput}/>
          <Route path='/shops/:id'render={(routerProps) => <Shop {...routerProps} shops={this.props.shops}/>}/>
          <Route path='/shops' render={(routerProps) => <Shops {...routerProps} shops={this.props.shops}/>}/>
        </Switch>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    shops: state.shops
  }
}
export default connect(mapStateToProps, {fetchShops})(ShopsContainer)
