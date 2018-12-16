import React from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Layouts/Home'
import AdminPage from './admin/src/AdminPage'

class App extends React.Component {
  render() {
    return (
      <Router> 
        <div className="app">
          <Provider store={Store}>
            <Route exact path="/" component={Home} />
          </Provider>
          <Route path="/admin/" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App
