import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login'
import ReportList from './ReportList'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Login} />
          <Route path="/reports" component={ReportList} />
        </div>
      </Router>
    )
  }
}

export default App
