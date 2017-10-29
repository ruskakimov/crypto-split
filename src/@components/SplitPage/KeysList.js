import React from 'react'
import { connect } from 'react-redux'

const KeysList = ({ keys }) => {
  if (keys.length === 0 || keys[0] === '') {
    return <div>No message.</div>
  }

  return (
    <ul>
      {
        keys.map((key) => (
          <li key={key}>{key}</li>
        ))
      }
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    keys: state.split.keys
  }
}

export default connect(mapStateToProps)(KeysList)