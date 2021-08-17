import React from 'react'
import ProductInput from '../components/ProductInput'
import Products from '../components/Products'
import Accordion from 'react-bootstrap/Accordion'

class ProductContainer extends React.Component {

  render() {

    return(
      <React.Fragment>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Products</Accordion.Header>
            <Accordion.Body >
              <Products products={this.props.shop && this.props.shop.products}/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Add A New Product</Accordion.Header>
            <Accordion.Body>
              <ProductInput shop={this.props.shop}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </React.Fragment>
    )
  }
}

export default ProductContainer
