import React from 'react'
import { connect } from 'react-redux'
import { copyKey } from '@actions'
import styled from 'styled-components'
import Input from '@components/global/Input'


const List = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: block;
  margin: 20px 0;
`

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
    <List>
      {
        keys.map((key, i) => (
          <ListItem key={key}>
            <Input onFocus={e => handleFocus(e, i)} value={key} type="text" readOnly/>
            { copied[i] ? '[copied]' : '' }
          </ListItem>
        ))
      }
    </List>
  )
}

function mapStateToProps(state) {
  return {
    keys: state.split.keys,
    copied: state.split.copied,
  }
}

export default connect(mapStateToProps, { copyKey })(KeysList)