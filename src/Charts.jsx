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
        2021 წლის მდგომარეობით
      </p>
      <p>
        <span style={{ color: "#3FC8E4" }}>■ </span>
        2022 წლის მდგომარეობით
      </p>
    </div>
  );
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
        <YAxis type="category" dataKey="name" tickLine={false} tick={false} />
        <Tooltip />
        <Legend content={CustomLegend} />
        <Bar dataKey="2022" fill="#1488CC" barSize={22} radius={[0, 5, 5, 0]}>
          <LabelList dataKey="2022" position="right" />
          <LabelList dataKey="name" position="top" />
        </Bar>
        <Bar dataKey="2021" fill="#3FC8E4" barSize={22} radius={[0, 5, 5, 0]}>
          <LabelList dataKey="2021" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
