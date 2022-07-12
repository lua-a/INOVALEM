import "./chart.scss";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Fevereiro", Total: 2000 },
  { name: "Março", Total: 2500 },
  { name: "Abril", Total: 1800 },
  { name: "Maio", Total: 3000 },
  { name: "Junho", Total: 2250 },
  { name: "Julho", Total: 900 },
];

const Chart = ({ aspect, title }) => {

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect} >
        <AreaChart className="chartEdit"
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6F29" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#FF6F29" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <YAxis />
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#FF6F29"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;