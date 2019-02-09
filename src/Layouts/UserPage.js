import React from 'react'
import {connect} from 'react-redux'
import Async from "react-async"
import {Link} from 'react-router-dom'
import {getRandomUserTheme} from '../helpers/getRandomColor'
import Layout from './Layout'
import UserCardHeader from '../Components/UserCard/UserCardHeader'
import {Card, CardContent, Grid, Typography} from '@material-ui/core/'

const loadUsers = ({ endpoint, actionName }, { signal }) =>
fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, { signal })
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())
  .then(json => {
    const action = {type: actionName, value: json}
    this.props.dispatch(action)
  })

  const UserPage = () => (
    <Async promiseFn={loadUsers} endpoint={'Users'} actionName={'STORE_USERS'}>
    <Async.Loading>Loading...</Async.Loading>
    <Async.Resolved>
      {data => (
        <Layout>
          <Grid container>
            <Card>
            <pre>{JSON.stringify(data, null, 2)}</pre>
              {/* <UserCardHeader 
                user={user} 
                userTheme={userTheme}
              />
              <CardContent>
                <Typography>
                  {user && user.username}
                </Typography>
                <Typography>
                  {user && user.name}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
          <Grid container>
            <Link to={'/users'}>
              Retour à la page utilisateurs
            </Link>
          </Grid>
        </Layout>
      )}
    </Async.Resolved>
    <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
  </Async>
  )

// class UserPage extends React.Component {
//   state = {
//     user: null,
//     userTheme: null
//   }

//   componentDidMount() {  
//     let users = this.props.storeUsers.Users
//     if (users.length === 0) {
//       this.fetchUsers() 
//     } 
//     this.getUser(users)
//   }

//   getAndStore = (url, endpoint, actionName) => {
//     fetch(url + endpoint)
//     .then(response =>  {return response.json()})
//     .then(json => {
//       const action = {type: actionName, value: json}
//       this.props.dispatch(action)
//     })
//   }

//   fetchUsers = () => {
//     const url = 'https://jsonplaceholder.typicode.com/'
//     this.getAndStore(url, 'Users', 'STORE_USERS')
//   }

//   setUserTheme = () => {
//     const userTheme = getRandomUserTheme()
//     this.setState({userTheme: userTheme})
//   }

//   getUser = (users) => {
//     const username = this.props.match.params.username
//     const user = users.find(user => {
//       return user.username === username
//     })
//     this.setState({user: user})
//     this.setUserTheme()
//   }

//   render() {
//     const {user, userTheme} = this.state
//     if (null !== user && undefined !== user) {    
//       return (
//         <Layout>
//           <Grid container>
//             <Card>
//             <UserCardHeader 
//                 user={user} 
//                 userTheme={userTheme}
//               />
//               <CardContent>
//                 <Typography>
//                   {user && user.username}
//                 </Typography>
//                 <Typography>
//                   {user && user.name}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid container>
//             <Link to={'/users'}>
//               Retour à la page utilisateurs
//             </Link>
//           </Grid>
//         </Layout> 
//       );
//     } else {
//       return (
//         <Typography>toto</Typography>  
//       )
//     }
    
//   }
// }

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
