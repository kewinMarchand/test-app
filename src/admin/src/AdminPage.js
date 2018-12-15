import React from 'react';
import {Admin, Resource} from 'react-admin';
import DataProvider from './DataProvider';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import theme from '../../Theme'
import UserList from './Lists/Users';
import PostList from './Lists/Posts';

class AdminPage extends React.Component {
  render() {
    return (
      <Admin 
        title="Purjus"
        dataProvider={DataProvider} 
        dashboard={Dashboard}
        catchAll={NotFound}
        theme={theme}
      >
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={PostList} />
      </Admin>
    );
  }
}

export default AdminPage;
