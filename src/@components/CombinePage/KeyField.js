import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeKeyFieldValue, submitKey } from '@actions'
import Input from '@components/global/Input'

class KeyField extends Component {
  handleChange = (e) => {
    this.props.changeKeyFieldValue(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitKey()
  }

  handleFocus = (e) => {
    e.target.select()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Enter key:
        <Input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        {this.props.errorMessage}
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.combine.keyField }
}

export default connect(mapStateToProps, { changeKeyFieldValue, submitKey })(KeyField)