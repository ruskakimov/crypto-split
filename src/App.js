import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '@constants'

import NavBar from '@components/NavBar'
import MainPage from '@components/MainPage'
import SplitPage from '@components/SplitPage'
import CombinePage from '@components/CombinePage'
import Warning from '@components/Warning'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 10px;
  color: ${colors.neon_green};
  font-family: ${fonts.monospace}
`

const App = (props) => {
  return (
    <Wrapper>
      <Warning/>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/split" component={SplitPage} />
          <Route path="/combine" component={CombinePage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </main>
    </Wrapper>
  )
}

export default App