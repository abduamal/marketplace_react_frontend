import React from 'react'
import { connect } from 'react-redux'
import { addShop } from '../actions/addShop'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'


class ShopInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      industry: 'Entertainment'
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
    this.setState({
      name: '',
      industry: ''
    })
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Shop Name"
            className="mb-3"
          >
            <Form.Control type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Select An Industry">
            <Form.Select aria-label="Select an Industry" onChange={this.handleChange} name='industry' value={this.state.industry} >
              <option value="Entertainment">Entertainment</option>
              <option value="Technology">Technology</option>
              <option value="Retail">Retail</option>
              <option value="Service">Service</option>
              <option value="Other">Other</option>
            </Form.Select>
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}


export default connect(null, {addShop})( ShopInput)
