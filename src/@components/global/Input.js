import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '@constants'

export default styled.input`
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