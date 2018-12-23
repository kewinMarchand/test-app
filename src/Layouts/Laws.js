import React from 'react'
import {connect} from 'react-redux'
import Layout from './Layout'
import LawCard from '../Components/LawCard/LawCard'

const url = 'https://www.lafabriquedelaloi.fr/api/dossiers_18.json'

class Laws extends React.Component {

  getAndStore = (actionName) => {
    fetch(url)
    .then(response =>  {return response.json()})
    .then(json => {
      const action = {type: actionName, value: json.dossiers}
      this.props.dispatch(action)
    })
    .then(console.log(this.props.storeLaws.Laws))
  }

  componentDidMount() {  
    this.getAndStore('STORE_LAWS')
  }

  render() {
    const laws = this.props.storeLaws.Laws
    console.log(laws)
    return (
      <Layout>
        {[] !== laws && laws.map((law, index) => (
          <LawCard key={index} law={law}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Laws)
