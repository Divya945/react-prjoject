import React, { Component } from 'react';
import './style.css';
import Person from './Component/Component';
import Employee from './Component/Employee';

class App extends Component {
  state = {
    person: [{ name: 'First' }, { name: 'Second' }, { name: 'Third' }]
  };
  listOfEmp = {
    employee: [{ id: 101 }, { name: 'User1' }, { job: 'SF' }, { salary: 1000 }]
  };
  render() {
    return (
      <div className="App">
        <table className="tableStyle">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>JobTitle</th>
            <th>Salary</th>
          </tr>
          <tr>
            <td>
              {' '}
              <Employee id={this.listOfEmp.employee[0].id} />
            </td>
            <td>
              {' '}
              <Employee name={this.listOfEmp.employee[1].name} />
            </td>
            <td>
              <Employee job={this.listOfEmp.employee[2].job} />
            </td>
            <td>
              {' '}
              <Employee salary={this.listOfEmp.employee[3].salary} />
            </td>
          </tr>
        </table>
        <Person name={this.state.person[0].name} />
        <Person name={this.state.person[1].name}>"Im Middle one"</Person>
        <Person name={this.state.person[2].name} />
        <Person name="Forth" />
      </div>
    );
  }
}
export default App;
