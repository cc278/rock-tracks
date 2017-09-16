import React, { Component } from 'react'
import Header from './components/Header'
import TrackGridContainer from './tracks/TrackGridContainer'
import TrackDetailContainer from './tracks/TrackDetailContainer'
import NoMatch from './components/NoMatch'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './css/bulma.css'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header>
        </Header>
        <Switch>
          <Redirect exact path="/" to="/tracklist"/>
          <Route exact path="/tracklist" component={TrackGridContainer}/>
          <Route exact path="/trackdetail/:trackid" component={TrackDetailContainer}/>
          <Route component={NoMatch}/>
        </Switch>
        
      </div>
    )
  }
}

export default App
