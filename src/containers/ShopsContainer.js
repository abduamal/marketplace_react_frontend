import React from 'react'
import { connect } from 'react-redux'
import { fetchShops } from '../actions/fetchShops'
import ShopInput from '../components/ShopInput'
import Shops from '../components/Shops'

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
        <ShopInput/>
        <Shops shops={this.props.shops}/>
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
