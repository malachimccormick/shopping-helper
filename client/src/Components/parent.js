import React, { Component } from 'react';
import {Link} from 'react-router-dom'

// This file holds the state of the entire file



class Parent extends Component {
  

  render() {
    const newItem='/newItem'
    return (
        <div >
            < h1 > The Grocery Shopper</h1 >
          
              <div >
                <button  id='login'to=''href=''>Login</button>
                <button  id='groceryList'to=''href=''>Grocery List</button>
                <Link to={newItem} ><button  id='newList' >New List</button></Link>
              </div>
              
              
        </div>
      
    );
  }
}

export default Parent;