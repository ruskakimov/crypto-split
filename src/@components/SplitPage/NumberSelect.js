import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNumberOfSplitKeys } from '@actions'
import { MIN_KEYS, MAX_KEYS } from '@constants'

class NumberSelect extends Component {
  handleChange = (e) => {
    this.props.changeNumberOfSplitKeys(e.target.value)
  }

  generateOptions() {
    const options = []
    for (let value = MIN_KEYS; value <= MAX_KEYS; value++) {
      options.push(
        <option key={value} value={value}>{value}</option>
      )
    }
    return options
  }

  render() {
    return (
      <select value={this.props.number} onChange={this.handleChange}>
        {this.generateOptions()}
      </select>
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.split.number
  }
}

export default connect(mapStateToProps, { changeNumberOfSplitKeys })(NumberSelect)