import React from 'react'
import Message from './Message'
import KeysList from './KeysList'
import KeyField from './KeyField'

const CombinePage = (props) => {
  return (
    <div>
      <KeyField/>
      <Message/>
      <KeysList/>
    </div>
  )
}

export default CombinePage