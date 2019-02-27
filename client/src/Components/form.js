import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Form extends Component {
  state={
    newItem:{
      item:'',
      value:''
    },
    redirect:false
  }


  handleChange = (e) =>{
      const attributeName= e.target.name
      const attributeValue = e.target.value
      const stateStatus = {...this.state.newItem}
      stateStatus[attributeName]=attributeValue
      
      this.setState({stateStatus}) 
      console.log(stateStatus)
  }

  addItem =(e)=>{
    e.preventDefault()
    const newItem={
      item:this.state.newItem.item,
      value:this.state.newItem.value,

    }
    console.log(newItem)
    this.props.addNewItemList(newItem)
    this.setState({newItem,redirect:true})


  }
  render() {
    if(this.state.redirect){

      return <Redirect push to={'/'}/>
      
    }


    return (
      <div >
        < form action='/groceries/add' method='post'>
          <input input='text' name='item' placeholder='Item'/>
          <br/>
          <input input='text' name='value' placeholder= 'Value' />
          <br/>
          <button action='submit'>Submit</button>
          <a href="/">Cancel</a>

       </form>
       {/* < form onSubmit={this.addItem}>
          <input onChange={this.handleChange} input='text' name='item' placeholder='Item'/>
          <br/>
          <input onChange={this.handleChange} input='text' name='value' placeholder= 'Value' />
          <br/>
          <button type='submit'>Submit</button>

       </form> */}
      </div>
    );
  }
}

export default Form;