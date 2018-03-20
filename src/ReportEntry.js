import React, { Component } from "react";
import "./BoxShadow.css";
import "./Report.css";

const toSeverityClass = severity => {
  switch (severity) {
    case 0:
      return "info";
    case 1:
      return "normal";
    case 2:
      return "major";
  }
  throw "Unknown severity value: " + severity;
};

class ReportEntry extends Component {
  render() {
    const { createdAt, entry } = this.props;
    let severity = toSeverityClass(entry.severity);
    let date = new Date();
    date.setTime(createdAt * 1000);
    const file_url = entry.affected_code[0].start.file; //  + "#L" + entry.affected_code[0].start.line
    return (
      <div className={"report card card-3 " + severity}>
        <div className="report-row report-header">
          <div>
            <span
              className="report-icon entypo-attention"
              data-text="attention"
            />
            <span className="report-message">{entry.message}</span>
          </div>
          <span className="report-date">{date.toLocaleString()}</span>
        </div>
        <div className="report-row">
          <span className="report-icon entypo-code" data-text="code" />
          <span>
            <a className="report-file" href={file_url} target="_blank">
              {file_url}
            </a>
          </span>
        </div>
        <div className="report-row">
          <p className="report-additional-info">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="report-row">
          <span className="report-icon entypo-tag" data-text="tag" />
          <span>{entry.origin}</span>
        </div>
      </div>
    );
  }
}

export default ReportEntry;
