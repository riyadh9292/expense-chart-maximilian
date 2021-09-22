import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = props => {
  const values = props.dataPoints.map(data => data.value);
  const maximum = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maximum}
        />
      ))}
    </div>
  );
};

export default Chart;
