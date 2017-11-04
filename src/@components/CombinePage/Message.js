import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { colors, fonts } from '@constants'

const Wrap = styled.div`
  text-align: center;
`

const MessageText = styled.h2`
  margin: 10px 0;
  font: 24px ${fonts.monospace};
  color: ${colors.neon_green};
  word-wrap: break-word;
`

const Message = ({ message }) => {
  if (!message) return <div></div>

  return (
    <Wrap>
      Decoded message:
      <MessageText>{message}</MessageText>
    </Wrap>
  )
}

function mapStateToProps(state) {
  return {
    message: state.combine.message
  }
}

export default connect(mapStateToProps)(Message)