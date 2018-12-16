import React from 'react'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Layouts/Home'
import Users from './Layouts/Users'
import AdminPage from './admin/src/AdminPage'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <Router> 
        <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
          <Route path="/admin/" component={AdminPage} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App
