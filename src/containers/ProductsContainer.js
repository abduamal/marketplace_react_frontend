import React from 'react'
import ProductInput from '../components/ProductInput'
import Products from '../components/Products'

class ProductContainer extends React.Component {
  // constructor() {
  //
  // }

  render() {

    return(
      <div>
        <ProductInput/>
        <Products products={this.props.shop && this.props.shop.products}/>
      </div>
    )
  }
}

export default ProductContainer
