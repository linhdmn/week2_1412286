import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { students: [] }
    }
    componentDidMount(){
        fetch('/api/student', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(res => res.json())
            .then(students => this.setState({ students }))
    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>QUẢN LÝ SINH VIÊN</h2>
            </div>
              <h1>Danh sách sinh viên</h1>
              <br /><br />
              {this.state.students.length !== 0 ? "" : "api not yet called"}
              {this.state.students.map(student =>
                <div key={student.mssv}>{student.mssv} {student.hoten} {student.diemtichluy}</div>
              )}
          </div>
        );
    }
}

export default App;
