import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className='form' id='form-component'>
       < form action = '/groceries/add' method='post' >
          <input input='text' name='item' placeholder='Item'/>
          <br/>
          <input input='text' name='value' placeholder= 'Value' />
          <br/>
          <button action='submit'>Submit</button>

       </form>
      </div>
    );
  }
}

export default Form;