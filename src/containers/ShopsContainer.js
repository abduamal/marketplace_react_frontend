import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
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
        <Route path='/shops/new' component={ShopInput}/>
        <Route path='/shops/:id'render={(routerProps) => <Shop {...routerProps} shops={this.props.shops}/>}/>
        <Route exact path='/shops' render={(routerProps) => <Shops {...routerProps} shops={this.props.shops}/>}/>
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
