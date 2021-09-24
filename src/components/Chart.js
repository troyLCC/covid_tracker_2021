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
import styles from "./Chart.module.css";
const Chart = (props) => {
  return (
    <ResponsiveContainer
      className={styles.chat_container}
      aspect={3}
      width={1200}
      height="70%"
    >
      <LineChart
        width={600}
        height={500}
        data={props.data}
        margin={{ top: 10, right: 150, left: 85, bottom: 5 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
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
