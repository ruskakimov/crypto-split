import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitMessage, changeMessage } from '@actions'
import Input from '@components/global/Input'

class EntryForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitMessage(this.props.message)
  }

  handleChange = (e) => {
    this.props.submitMessage(e.target.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Enter secret message:
        <Input
          type="text"
          value={this.props.message}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.split.message
  }
}


export default connect(mapStateToProps, { submitMessage })(EntryForm)