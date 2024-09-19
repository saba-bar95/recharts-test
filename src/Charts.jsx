import React from "react";
import "./charts.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  LabelList,
} from "recharts";
import { data } from "./Data";

const CustomLegend = () => {
  return (
    <div className="legend-container">
      <p>
        <span style={{ color: "#1488CC" }}>■ </span>
        2022 წლის მდგომარეობით
      </p>
      <p>
        <span style={{ color: "#3FC8E4" }}>■ </span>
        2021 წლის მდგომარეობით
      </p>
    </div>
  );
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const CustomLabel = (props) => {
  const { x, y, value } = props;
  return (
    <text x={x + 5} y={y - 10}>
      {value}
    </text>
  );
};

const customRightLabels = (props) => {
  const { x, y, width, value } = props;
  return (
    <text x={x + width + 15} y={y + 16}>
      {formatNumber(value)}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name} : {formatNumber(entry.value)}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default function Charts() {
  return (
    <ResponsiveContainer height={490}>
      <BarChart
        width={656}
        height={490}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeWidth={2.5} horizontal={false} stroke="#E9E9E9" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickFormatter={formatNumber}
        />
        <YAxis type="category" dataKey={2021} tickLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={CustomLegend} />
        <Bar dataKey="2022" fill="#1488CC" barSize={22} radius={[0, 5, 5, 0]}>
          <LabelList dataKey="2022" content={customRightLabels} />
          <LabelList dataKey="name" content={CustomLabel} />
        </Bar>
        <Bar dataKey="2021" fill="#3FC8E4" barSize={22} radius={[0, 5, 5, 0]}>
          <LabelList dataKey="2021" content={customRightLabels} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
