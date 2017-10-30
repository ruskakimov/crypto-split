import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeKeyFieldValue, submitKey } from '@actions'

class KeyField extends Component {
  handleChange = (e) => {
    this.props.changeKeyFieldValue(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitKey()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
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