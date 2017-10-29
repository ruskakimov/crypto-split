import React from 'react'
import EntryForm from './EntryForm'
import KeysList from './KeysList'
import NumberSelect from './NumberSelect'

const SplitPage = (props) => {
  return (
    <div>
      <h1>Split page</h1>
      <EntryForm/>
      <NumberSelect/>
      <KeysList/>
    </div>
  )
}

export default SplitPage