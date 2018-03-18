import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Report from "./Report.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { reports: [] };
  }

  componentDidMount() {
    return fetch("http://localhost:8000/report/myproj")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          reports: responseJson
        });
      });
  }

  render() {
    const reportRows = this.state.reports.map((r, idx) => (
      <Report key={idx} report={r} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <span className="entypo-menu" data-text="search" />
          <div className="App-breadcrumbs">
            <a href="#">
              <h1 className="App-title">Coala Collector</h1>
            </a>
            <span> &nbsp;>&nbsp;</span>
            <a href="#">myproj</a>
          </div>
          <div>
            <input type="text" placeholder="Search.." />
            <a className="searchinput" href="#">
              <span className="entypo-search" data-text="search" />
            </a>
          </div>
        </header>
        {reportRows}
      </div>
    );
  }
}

export default App;
