import React, { Component } from 'react';
// import axios from 'axios'
// let items
class Content extends Component {
    // constructor() {
    //     super();
//     this.state = {
//         items: []
//     }
// }
//     componentDidMount() {
//        axios.get('http://localhost:3001/groceries')
//            .then(function (response) {
//                console.log(response);
//                items=response.data
//                console.log(items)
//                this.setState({items:items})
//                return response.json()
//            }).then(data=>{
//                items=data.response.map((item) =>{
//                     return(<div key={item.response}>
//                     <li>{item.item}</li></div>)
//                 })
//            })
//            .catch(function (error) {
//                console.log(error);
//            });}
  render() {
    return (
        <div >
        <div id='content-holder'>

        </div>
            <div id='content-list'>
                <h1 id='content-h1'>My List</h1>
                <ul>
                     {/* { this.state.items.map(items => <li className = 'content-li'>{[0].item}</li>)} */}
                    < li className = 'content-li' >
                        {[0].item}
                    </li>
                    < li className = 'content-li' >
                       {[0].item}
                    </li>
                    < li className = 'content-li' >
                        jksdhflj
                    </li>
                </ul>
            </div>
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