import React from 'react'
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Layouts/Home'
import Users from './Layouts/Users'
import Laws from './Layouts/Laws'
import AdminPage from './admin/src/AdminPage'

class App extends React.Component {
  render() {
    return (
      <Router> 
          <div className="app">
            <Provider store={Store}>
              <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/lois" component={Laws} />
              </React.Fragment>
            </Provider>
            <Route path="/admin/" component={AdminPage} />
          </div>
      </Router>
    );
  }
}

export default App
