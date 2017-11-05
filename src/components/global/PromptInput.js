import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@/constants'
import { Input } from '@/components/global'

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px;
`

const Prompt = styled.span`
  color: ${colors.neon_green};
  font: 16px ${fonts.monospace};
`

const handleFocus = e => {
  const t = e.target
  t.selectionStart = t.selectionEnd = t.value.length
}

export default ({ value, onChange }) => {
  return (
    <Wrap>
      <Prompt>></Prompt>
      <Input
        innerRef={comp => comp && comp.focus()}
        onFocus={handleFocus}
        value={value}
        onChange={onChange}
      />
    </Wrap>
  )
}