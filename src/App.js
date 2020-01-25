import React, { Component } from 'react'
import GuestHome from './component/guestUser/GuestHome'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          {/* <Navigation /> */}
        <Switch>
            <Route path='/' exact component={GuestHome} />
        </Switch>
      </div>   
      </BrowserRouter>
    )
  }
}

export default App