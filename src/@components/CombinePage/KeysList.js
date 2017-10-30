import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteKey } from '@actions'

class KeysList extends Component {
  handleDelete = (index) => {
    this.props.deleteKey(index)
  }

  render() {
    return (
      <ul>
        {
          this.props.keys.map((key, i) => (
            <li key={key}>
              {key}
              <button onClick={() => this.handleDelete(i)}>remove</button>
            </li>
          ))
        }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    keys: state.combine.keys
  }
}

export default connect(mapStateToProps, { deleteKey })(KeysList)