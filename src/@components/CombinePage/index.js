import React from 'react'
import Message from './Message'
import KeysList from './KeysList'
import KeyField from './KeyField'

const CombinePage = (props) => {
  return (
    <div>
      <h1>Combine page</h1>
      <KeyField/>
      <Message/>
      <KeysList/>
    </div>
  )
}

export default CombinePage