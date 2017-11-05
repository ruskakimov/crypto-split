import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@/constants'

export default styled.input.attrs({
  spellCheck: false
})`
  min-width: 50px;
  color: ${colors.neon_green};
  font: 16px ${fonts.monospace};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.dim_green};
  flex-grow: 1;
  padding: 0 5px 5px;
  text-overflow: ellipsis;
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: ${colors.neon_green};
  };
`