import React from 'react'
import { connect } from 'react-redux'
import { addShop } from '../actions/addShop'

class ShopInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      industry: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addShop(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Shop Name</label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br/>
          <label>Shop Industry</label>
          <select onChange={this.handleChange} name='industry' value={this.state.industry}  >
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
            <option selected value="Retail">Retail</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select><br/>
          <input type='Submit'/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addShop})( ShopInput)
