import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      count: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleIncrement() {
    const contentNum = this.state.content.length
    this.setState ({
      count: this.state.count + contentNum
    })
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="counter-form" name="content" value={this.state.content} onChange={this.handleChange}/>
          <button onClick={this.handleIncrement}>Click Me</button>
          <br/>
          <p>{this.state.count}</p>
        </form>

      </div>
    )
  }


}
export default Counter
