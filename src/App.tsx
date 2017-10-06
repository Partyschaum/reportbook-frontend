import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Login from './Login'

function Liste() {
  return <div>Liste</div>
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <Route exact={true} path="/" component={Login} />
          <Route path="/liste" component={Liste} />
        </div>
      </Router>
    )
  }
}

export default App
