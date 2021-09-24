import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = (props) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        data={props.data}
        width={400}
        height={300}
        margin={{ top: 10, right: 300, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cases"
          stroke="#8884d8"
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="deaths"
          stroke="#FF2E2E"
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
