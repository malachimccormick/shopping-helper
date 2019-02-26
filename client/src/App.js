import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent/parent'
import axios from 'axios'

let items
class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    items: []

  }
}
  componentDidMount() {
      axios.get('/groceries')
        .then(function (response) {
            console.log(response);
            items = response.data
            console.log(items)
       this.setState({
       item: items
       })
       })
       .catch(function (error) {
         console.log(error);
       });
       }
  render() {
    return (
      
  <Parent  />
    );
  }
}

   
    export default App