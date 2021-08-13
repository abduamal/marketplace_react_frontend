import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/addProduct'

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
        <form onSubmit={this.handleSubmit}>
          <label>Product Name:</label>
          <input type='text' placeholder='Name' name='name' onChange={this.handleChange} value={this.state.name}/><br/><br/>
          <label>Product Description:</label>
          <textarea placeholder='Description' name='description' onChange={this.handleChange} value={this.state.description}/><br/><br/>
          <label>Product Price:</label>
          <input type='text' placeholder='Price' name='price' onChange={this.handleChange} value={this.state.price}/><br/><br/>
          <label>Product Quantity:</label>
          <input type='text' placeholder='Quantity' name='quantity' onChange={this.handleChange} value={this.state.quantity}/><br/><br/><br/>
          <input type='submit'/><br/><br/>
        </form>
      </div>
    )
  }
}
export default connect(null, {addProduct})(ProductInput)
