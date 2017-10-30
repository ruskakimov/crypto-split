import React from 'react'
import { connect } from 'react-redux'

const KeysList = ({ keys }) => {
  return (
    <ul>
      {
        keys.map(key => (
          <li key={key}>
            {key}
          </li>
        ))
      }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    keys: state.combine.keys
  }
}

export default connect(mapStateToProps)(KeysList)