import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@constants'
import Input from '@components/global/Input'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px;
`

const Prompt = styled.span`
  color: ${colors.neon_green};
  font: 16px ${fonts.monospace};
`

export default ({ value, onChange }) => {
  return (
    <Wrap>
      <Prompt>></Prompt>
      <Input value={value} onChange={onChange} />
    </Wrap>
  )
}