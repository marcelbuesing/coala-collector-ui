import React, { Component } from "react";
import ReportEntry from "./ReportEntry.js";
import ReportHistoryGraph from "./ReportHistoryGraph.js";
import "./BoxShadow.css";
import "./Report.css";

class Report extends Component {
  render() {
    const { report } = this.props;
    const entries = report.report.map((x, idx) => (
      <ReportEntry key={idx} createdAt={report.created_at} entry={x} />
    ));

    return (
      <div>
        <ReportHistoryGraph />
        <div className="report-entries">{entries}</div>
      </div>
    );
  }
}

export default Report;
