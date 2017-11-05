import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNumberOfSplitKeys } from '@/actions'
import { MIN_KEYS, MAX_KEYS } from '@/constants'
import styled from 'styled-components'
import { colors } from '@/constants'

const Select = styled.select`
  background: ${colors.black};
  color: ${colors.neon_green};
  border: 2px solid ${colors.neon_green};
  margin-left: 10px;
`

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
      <div>
        Number of keys:
        <Select value={this.props.number} onChange={this.handleChange}>
          {this.generateOptions()}
        </Select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    number: state.split.number
  }
}

export default connect(mapStateToProps, { changeNumberOfSplitKeys })(NumberSelect)