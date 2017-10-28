import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from '@components/NavBar'
import MainPage from '@components/MainPage'
import SplitPage from '@components/SplitPage'
import CombinePage from '@components/CombinePage'

const App = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default App