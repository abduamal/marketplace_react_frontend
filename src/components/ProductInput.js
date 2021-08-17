import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/addProduct'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'

class ProductInput extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addProduct(this.state, this.props.shop.id)
    this.setState ({
      name: '',
      description: '',
      price: '',
      quantity: ''
    })
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Name"
            className="mb-3"
          >
            <Form.Control type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Description"
            className="mb-3"
          >
            <Form.Control type='text' placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Price"
            className="mb-3"
          >
            <Form.Control type='text' placeholder='Price' value={this.state.price} name='price' onChange={this.handleChange}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Product Quantity"
            className="mb-3"
          >
            <Form.Control type='text' placeholder='Quantity' value={this.state.quantity} name='quantity' onChange={this.handleChange}/>
          </FloatingLabel>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
export default connect(null, {addProduct})(ProductInput)
