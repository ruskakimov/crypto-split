import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from '@components/NavBar'
import MainPage from '@components/MainPage'
import SplitPage from '@components/SplitPage'
import CombinePage from '@components/CombinePage'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const App = (props) => {
  return (
    <Wrapper>
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