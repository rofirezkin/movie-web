"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF"];

const data = [
  { name: "Action", value: 12 },
  { name: "Drama", value: 9 },
  { name: "Comedy", value: 15 },
  { name: "Sci-Fi", value: 5 },
  { name: "Horror", value: 8 },
];

export default function GenreChart() {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h2 className="text-xl font-bold mb-4">Movies per Genre</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
