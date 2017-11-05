import React from 'react'
import styled from 'styled-components'
import { colors } from '@/constants'

export default styled.button`
  background-color: transparent;
  color: ${colors.neon_green};
  border: 2px solid ${colors.neon_green};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${colors.neon_green};
    color: ${colors.black};
  }
`