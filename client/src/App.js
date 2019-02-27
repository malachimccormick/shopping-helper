import React, { Component } from 'react';
import './App.css';
import Parent from './Components/parent'
import Form from './Components/form'
import axios from 'axios'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Content from './Components/content'

class App extends Component {
constructor() {
  super()
  this.state = {
    items: []

  };
}

componentDidMount() {
  this.getItems()
}

getItems = () =>{
  axios.get('/groceries')
    .then((res)=>{
this.setState({items: res.data})
console.log(this.state)
    })
    .catch(function (error) {
      console.log(error);
    });
}

addNewItemList = (newItem) => {
  console.log(newItem)
  axios.post('/groceries/add')
  .then((res)=>{
    const itemsList =[...this.state.items]
    itemsList.push(res.data)
    this.setState({items:itemsList})
  })
}

render() {


  const ContentPage= (props) =>{
    return(
      <Content items={this.state.items}/>
    )
  }


  const FormPage= (props) =>{
    return(
      <Form addNewItemList={this.addNewItemList} />
    )
  }

    return (
      <Router>
      <div>
          <Parent />
        <Switch>
          
    <Route exact path= '/' render={ContentPage} /> 
    <Route exact path='/newItem' render={FormPage}/>
          </Switch>
      </div>
      </Router>
            );
      
  }
}

   
    export default App