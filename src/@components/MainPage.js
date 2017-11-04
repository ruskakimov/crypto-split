import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { colors, fonts } from '@constants'
import readme from '../../README.md'

const Article = styled(ReactMarkdown)`
  font: 15px ${fonts.monospace};
  line-height: 1.5em;

  h1, h2 {
    font-weight: normal;
    margin: 2em 0 .7em;
  }

  a {
    color: ${colors.neon_green};
  }

  blockquote {
    color: ${colors.yellow};
    font-style: italic;
  }
`

class MainPage extends Component {
  render() {
    return (
      <Article source={readme} />
    )
  }
}

export default MainPage