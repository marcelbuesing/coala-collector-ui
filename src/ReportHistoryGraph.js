import React from "react";
import "./BoxShadow.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
  GradientDefs,
  Borders
} from "react-vis";

export default class ReportHistoryGraph extends React.Component {
  render() {
    return (
      <div>
        <XYPlot xDomain={[0, 30]} yDomain={[0, 26]} width={1850} height={300}>
          <GradientDefs>
            <linearGradient id="MajorGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FF3D00" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FF9E80" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="NormalGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFFF8D" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FFEA00" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="InfoGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#82B1FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#2979FF" stopOpacity={0.3} />
            </linearGradient>
          </GradientDefs>
          <VerticalGridLines />
          <HorizontalGridLines />
          <AreaSeries
            color={"url(#InfoGradient)"}
            data={[
              { x: 0, y: 1 },
              { x: 3, y: 4 },
              { x: 5, y: 1 },
              { x: 15, y: 5 },
              { x: 30, y: 10 }
            ]}
          />
          <AreaSeries
            color={"url(#NormalGradient)"}
            data={[
              { x: 0, y: 14 },
              { x: 5, y: 2 },
              { x: 5, y: 2 },
              { x: 20, y: 5 },
              { x: 30, y: 3 }
            ]}
          />
          <AreaSeries
            color={"url(#MajorGradient)"}
            data={[
              { x: 0, y: 10 },
              { x: 2, y: 25 },
              { x: 5, y: 20 },
              { x: 15, y: 20 },
              { x: 30, y: 15 }
            ]}
          />

          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
