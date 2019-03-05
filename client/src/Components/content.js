import React, { Component } from 'react';
import axios from 'axios'

// import axios from 'axios'
// let items
class Content extends Component {
     state={
      items:[]
    }

componentDidMount(){
    this.getItem()
}
       
getItem= itId =>{
    
    axios.get('/groceries')
        .then((res)=>{
            this.setState({items: res.data})
                console.log(this.state)
                    })

                .catch(function (error) {
            console.log(error);
        });

}
        deleteItem= deleteItemList =>{
            this.props.deleteItemList(deleteItemList)
                this.getItem()
            console.log(deleteItemList)
        }
        
    render() {
        const list= this.state.items.map((items,index)=>{
            
         
              
      return(
        <div key={items._id}>

        
            <div>
                
                <ul>
                     {/* { this.state.items.map(items => <li className = 'content-li'>{[0].item}</li>)} */}
                    < li  >
                        {items.item} cost ${items.value} <button onClick={()=>this.deleteItem(`${items._id}`)}><small>x</small></button>
                    </li>
                    
                </ul>
            </div>
            </div>
           
      )
      })
    return (
        <div >
            < h1 > My List </h1>
                {list}
        </div>
       
    );
  }
}

export default Content;


