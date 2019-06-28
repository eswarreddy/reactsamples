import React    from "react";
import template from "./Home.jsx";

class Home extends React.Component {
  constructor(){
    this.state ={
      result:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8040/fetch')
    .then((posRes) =>{
        console.log(posRes);
    })
    .catch((errRes)=>{
        console.log(errRes);
    })
  }
  render() {
    return template.call(this);
  }
}

export default Home;
