import React, { Component } from "react";
import "./style.css";
import HeadName from './Component/Component'

class App extends Component {
    render() { 
    return (
    <div className = "App">
      <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>JobTitle</th>
        <th>Salary</th>
      </tr>
      </table>
    </div>
    );
  }
}
export default App;
