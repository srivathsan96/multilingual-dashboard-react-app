import React from "react";

import { VictoryPie } from "victory";

// Pie Chart

const PieChart = (props) => {
  let DATA;
  let COLORS = props.colorPalette;

  // Dummy Data

  if (props.type === "File Types Report") {
    DATA = [
      { x: " ", y: 0.5 },
      { x: " ", y: 95 },
      { x: " ", y: 2 },
      { x: " ", y: 0.5 },
      { x: " ", y: 1 },
      { x: " ", y: 1 },
    ];
  } else if (props.type === "All Workflows Initiated Report") {
    DATA = [
      { x: " ", y: 50 },
      { x: " ", y: 50 },
    ];
  }
  return (
    <div>
      <VictoryPie data={DATA} colorScale={COLORS} startAngle={440}
        endAngle={80} />
    </div>
  );
};

export default PieChart;
