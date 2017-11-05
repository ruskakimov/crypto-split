import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { colors, fonts } from '@constants'
import warning from '../../WARNING.md'

const WarningBox = styled(ReactMarkdown)`
  color: ${colors.yellow};
  font: 18px ${fonts.warning};
  line-height: 1.5em;
  padding: 1em;
  margin-top: 1em;
  border: 5px solid ${colors.yellow};

  a {
    color: ${colors.yellow};
  }

  p {
    margin: 0;
  }
`

export default () => {
  return (
    <WarningBox source={warning} />
  )
}