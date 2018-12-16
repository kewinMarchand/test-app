import React from 'react'
import {connect} from 'react-redux'
import Layout from './Layout'
import Navbar from '../Navigation/Navbar'
import Content from '../Components/Content'

const url = 'https://jsonplaceholder.typicode.com/'

class Home extends React.Component {

  getAndStore = (endpoint, actionName) => {
    fetch(url + endpoint)
    .then(response =>  {return response.json()})
    .then(json => {
      const action = {type: actionName, value: json}
      this.props.dispatch(action)
    })
  }

  componentDidMount() {  
    this.getAndStore('Users', 'STORE_USERS')
    this.getAndStore('Posts', 'STORE_POSTS')
  }

  render() {
    console.log(this.props.storeUsers.Users[0])
    return (
      <Layout>
        <Navbar/>
        <Content/>
      </Layout> 
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
