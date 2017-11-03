import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteKey } from '@actions'
import { Button } from '@components/global'

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
              <Button onClick={() => this.handleDelete(i)}>remove</Button>
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