import React from 'react'
import { connect } from 'react-redux'
import { copyKey } from '@actions'

const KeysList = ({ keys, copied, copyKey }) => {
  if (keys.length === 0 || keys[0] === '') {
    return <div>No message.</div>
  }

  const handleFocus = (e, i) => {
    e.target.select()
    document.execCommand('copy')
    copyKey(i)
  }

  return (
    <ul>
      {
        keys.map((key, i) => (
          <li key={key}>
            <input onFocus={e => handleFocus(e, i)} value={key} type="text" readOnly/>
            { copied[i] ? 'copied' : 'not copied' }
          </li>
        ))
      }
    </ul>
  )
}

function mapStateToProps(state) {
  console.log(state.split.copied)
  return {
    keys: state.split.keys,
    copied: state.split.copied,
  }
}

export default connect(mapStateToProps, { copyKey })(KeysList)