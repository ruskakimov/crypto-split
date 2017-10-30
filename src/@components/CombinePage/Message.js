import React from 'react'
import { connect } from 'react-redux'

const Message = ({ message }) => {
  return (
    <h2>{message}</h2>
  )
}

function mapStateToProps(state) {
  return {
    message: state.combine.message
  }
}

export default connect(mapStateToProps)(Message)