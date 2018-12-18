import React from 'react'
import {Admin, Resource, ListGuesser } from 'react-admin'
import DataProvider from '../../DataProvider'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'
import AdminLayout from './Layouts/AdminLayout'
import theme from '../../Theme'
import UsersList from './Lists/Users'
import PostsList from './Lists/Posts'
import PhotosList from './Lists/Photos'
import GroupWork from '@material-ui/icons/GroupWork'
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'

class AdminPage extends React.Component {
  render() {
    return (
      <Admin 
        title="Purjus"
        dataProvider={DataProvider} 
        dashboard={Dashboard}
        catchAll={NotFound}
        appLayout={AdminLayout}
        theme={theme}
      >
        <Resource 
          name="users" 
          list={UsersList} 
          icon={SupervisedUserCircle}
          options={{ label: 'Utilisateurs' }}
        />
        <Resource 
          name="posts" 
          list={PostsList} 
          icon={GroupWork}
          options={{ label: 'Articles' }}
        />
        <Resource 
          name="comments" 
          list={ListGuesser} 
          icon={ChatBubbleOutline}
          options={{ label: 'Commentaires' }}
        />
        <Resource 
          name="photos" 
          list={PhotosList} 
          icon={ChatBubbleOutline}
          options={{ label: 'Photos' }}
        />
      </Admin>
    );
  }
}

export default AdminPage;
