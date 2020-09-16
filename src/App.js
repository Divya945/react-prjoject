import React, { Component } from "react";
import "./style.css";
import HeadName from './Component/Component'

class App extends Component {
  constructor(){
    this.state = {
      id: 1011,
      name: "Alex",
      job: "Developer",
      salary: 2222
    };
  }


  render() { 
    return (
    <div className = "App">
      <button>Form Button</button>
      <HeadName />
      <HeadName name ="first" type="firsttype" />
      <HeadName name ="second" type="secondtype" > category : Second</HeadName>
      <HeadName name ="third" type="thirdtype" />
      <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>JobTitle</th>
        <th>Salary</th>
      </tr>
        <tr>
          <td>{this.state.id}</td>
          <td>{this.state.name}</td>
          <td>{this.state.job}</td>
          <td>{this.state.salary}</td>

        </tr>
      </table>
    </div>
    );
  }
}
export default App;
