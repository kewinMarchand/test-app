import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Layouts/Home'
import AdminPage from './admin/src/AdminPage'

class App extends React.Component {
  render() {
    return (
      <Router> 
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/admin/" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;
