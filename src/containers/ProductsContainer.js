import React from 'react'
import ProductInput from '../components/ProductInput'
import Products from '../components/Products'
import { addProduct } from '../actions/addProduct.js'
import { Route, Switch } from 'react-router-dom'

class ProductContainer extends React.Component {
  // constructor() {
  //
  // }

  render() {

    return(
      <div>
        <Switch>
          <Route exact path='/shops/:id/new' component={ProductInput}/>
          <Products products={this.props.shop && this.props.shop.products}/>
        </Switch>
      </div>
    )
  }
}

export default ProductContainer
