import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeKeyFieldValue, submitKey } from '@actions'
import styled from 'styled-components'
import { colors } from '@constants'
import { PromptInput } from '@components/global'

const ErrorMessage = styled.div`
  color: ${colors.red};
`

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
        <PromptInput
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        <ErrorMessage>
          {this.props.errorMessage}
        </ErrorMessage>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.combine.keyField }
}

export default connect(mapStateToProps, { changeKeyFieldValue, submitKey })(KeyField)