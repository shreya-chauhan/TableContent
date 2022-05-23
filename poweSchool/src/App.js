import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    {
      this.state = {
        obj: '', name: '', todos: []
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/routes/getData', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name: this.state.name })
    }).then(res => res.json())
      .then((data) => {
        this.setState({ todos: data.data })
        console.log(this.state.todos)
      }).catch((response) => {
      })
  }
  render() {
    return (
      <body>
        <div>
          <br />
          <center><h1 class="heading">AUTOCOMPLETE THE TABLE</h1>
            <br /><br />

            <form onSubmit={this.onSubmit}>
              <table cellpadding="30">
                <tr><td>Enter emp or prod to get the respective details </td></tr>
                <tr>
                  <td>
                    <input type="text" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required /></td><td>
                    <input type="submit" value="Submit" class="btn btn2" /></td></tr></table><br></br>
            </form></center>
          <table align="CENTER" border="2" cellpadding="15" bgcolor="#FFFFCC" width="50%">
            {this.state.todos.map(src => (
              <div>

                {src.employee_name && <tr border="2"> <td className="tdata" border="0px" width="100%"> {src.employee_name} </td><center><td className="tdata" width="100%" >{src.employee_salary}</td> </center></tr>}

                {src.name && <tr > <td className="tdata" border="0px" width="100%"> {src.name}</td><td className="tdata" border="0px" width="100%">{src.price}</td> </tr>}
              </div>
            )
            )}
          </table>
        </div>
      </body>
    );
  }
}
export default App;
