import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@constants'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px;
`

const Input = styled.input`
  color: ${colors.neon_green};
  font: 16px ${fonts.monospace};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.neon_green};
  flex-grow: 1;
  padding: 0 5px 5px;

  &:focus {
    outline: none;
  };
`

const Prompt = styled.span`
  color: ${colors.neon_green};
  font: 16px ${fonts.monospace};
`

export default ({ value, onChange }) => {
  return (
    <Wrap>
      <Prompt>></Prompt>
      <Input value={value} type="text" onChange={onChange} />
    </Wrap>
  )
}