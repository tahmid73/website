import React, {Component} from 'react';

class Data extends Component{

  constructor(props){
    super(props);
    this.state={
      item:[],
      isLoded:false,
    }
  }

  componentDidMount(){
    // //var url="https://jsonplaceholder.typicode.com/users";
    // var url="https://wakatime.com/share/@tahmid73/053496d0-ba39-49f7-a0b3-bd52b271a7e3.json";
    // fetch(url)
    //   .then(res=>res.json())
    //   .then(json=>{
    //     this.setState({
    //       isLoded:true, 
    //       items:json,
    //     })
    //   });

  }

  render(){

    var{ isLoded, items } = this.state;
    if(!isLoded){
      return <div>Loading...</div>
    }
    return(
      console.log(items[0].name),
      <div className='Data'>
        Data has been loaded
      </div>
    )
  }
}


export default Data;
