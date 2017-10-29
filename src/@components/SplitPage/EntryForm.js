import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitMessage } from '@actions'

class EntryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.state.message)
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}


export default connect(null, { submitMessage })(EntryForm)