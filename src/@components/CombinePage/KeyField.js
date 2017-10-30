import React, { Component } from 'react'
import { connect } from 'react-redux'

class KeyField extends Component {
  render() {
    return (
      <form>
        <input
          value={this.props.value}
          type="text"
        />
        {this.props.errorMessage}
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.combine.keyField }
}

export default connect(mapStateToProps)(KeyField)