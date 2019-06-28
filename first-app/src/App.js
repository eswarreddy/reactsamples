
import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Home from '../Home/Home';
/* function App() {

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); 
} */

export default class App extends React.Component{

  /* constructor(){
    super();
    this.state = {
      mysql:'my sql data base soon',
      no_of_tables:1,
      flag:"true",
      products:{
        p_id:111,
        p_name:'product_one',
        p_cost:10000
      },
      employee:[
        {e_id:111,e_name:'eone',e_sal:10000},
        {e_id:222,e_name:'etwo',e_sal:20000},
        {e_id:333,e_name:'ethree',e_sal:30000},
        {e_id:444,e_name:'efour',e_sal:40000},
        {e_id:555,e_name:'efive',e_sal:50000},
      ] 
    }
  }
  render(){
    return (
      <div>
        {this.state.mysql}
        <br/>
        {this.state.no_of_tables}
        <br/>
        {this.state.flag}
        <br/>
        {this.state.products.p_id}
        {this.state.products.p_name}
        {this.state.products.p_cost}
        <br/>
        <table border="1">
          <thead>
            <tr>
              <td> SNo</td>
              <td>EID</td>
              <td>ename</td>
              <td>esal</td>
            </tr>
            </thead>
            {
              this.state.employee.map((element,index) =>(
                <tbody>
                  <tr>
                    <td>{index+1}</td>
                    <td>{element.e_id}</td>
                    <td>{element.e_name}</td>
                    <td>{element.e_sal}</td>
                  </tr>
                </tbody>
              ))
            }
        </table>
      </div>
    )
  } */
  constructor(){
    super();
    this.state={
      db:"mongo db soon"

    }
  }
  myFun = ()=>{
  /*   var emplyee = { company:"dbs"} 
    var emp1 = Object.create(emplyee); 
    delete emp1.company 
    console.log(emp1.company); */

    /* var bar=true;
    console.log(bar+0);
    console.log(bar+"xyz");
    console.log(bar+true);
    console.log(bar+false); */

    /* var test=500;
    result=function()
    {
      console.log(test);
      var test=1000;
    }
    result(); */

    



    this.setState({
      db:"next weekend we will start mongodb"
    })
  }
  render(){
    
    return (
      <div>{this.state.db}
      <br/>
      <button onClick={this.myFun}> clickMe </button>
      <Home/>
      </div>
    )
  };
};
