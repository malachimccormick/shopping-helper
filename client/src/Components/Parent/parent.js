import React, { Component } from 'react';
import Form from '../Form/form'
import Content from '../Content/content'

// This file holds the state of the entire file


const items={items}
console.log(items)

class Parent extends Component {
  render() {
    return (
        <div id='wrapper'>
            < h1 id = 'ontop' > The Grocery Shopper</h1 >
          <div id='banner'>
            </div>
              <div id='bannerbar'>
                <button className='bar' id='login'to=''href=''>Login</button>
                <button className='bar' id='groceryList'to=''href=''>Grocery List</button>
                <button className='bar' id='newList' to='/groceries'href=''>New List</button>
              </div>
              <div className='form'>
              <Form/>
              </div>
              <Content />
        </div>
      
    );
  }
}

export default Parent;