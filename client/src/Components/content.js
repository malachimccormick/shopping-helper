import React, { Component } from 'react';

// import axios from 'axios'
// let items
class Content extends Component {
   
  render() {
      const list= this.props.items.map((items,index)=>{
      return(
        <div key={index}>

        
            <div>
                
                <ul>
                     {/* { this.state.items.map(items => <li className = 'content-li'>{[0].item}</li>)} */}
                    < li  >
                        {items.item} cost ${items.value}
                    </li>
                    
                </ul>
            </div>
            </div>
           
      )
      })
      console.log(this.props.items)
    return (
        <div >
            < h1 > My List </h1>
                {list}
        </div>
       
    );
  }
}

export default Content;



// fetch('http://localhost:3001/groceries', {
//     method: 'POST',
//     body: data
//   }).then(response => {
//       response.json()})
// axios.get('http://localhost:3001/groceries')
// .then(function (response) {
//   console.log(response);

// })
// .catch(function (error) {
//   console.log(error);
// });