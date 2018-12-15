import React from 'react';
import Layout from './Layout'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar/>
        <Content/>
      </Layout> 
    );
  }
}

export default Home;
