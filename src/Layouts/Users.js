import React from 'react'
import {connect} from 'react-redux'
import Layout from './Layout'
import UserCard from '../Components/UserCard/UserCard'

const url = 'https://jsonplaceholder.typicode.com/'

class Users extends React.Component {

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
    const users = this.props.storeUsers.Users
    return (
      <Layout>
        {users && users.map((user, index) => (
          <UserCard key={index} user={user}/> 
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
