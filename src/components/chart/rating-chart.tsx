"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface Rating {
  Source: string;
  Value: string;
}

interface Props {
  ratings: Rating[];
}

function normalizeRating(source: string, value: string): number {
  if (source === "Internet Movie Database" && value.includes("/10")) {
    return parseFloat(value.split("/")[0]) * 10;
  }
  if (value.endsWith("%")) {
    return parseFloat(value.replace("%", ""));
  }
  if (value.includes("/100")) {
    return parseFloat(value.split("/")[0]);
  }
  return 0; // fallback
}

export default function RatingSourceChart({ ratings }: Props) {
  const chartData = ratings.map((r) => ({
    source: r.Source,
    value: normalizeRating(r.Source, r.Value),
  }));

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h2 className="text-xl font-bold mb-4">Ratings from Sources</h2>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="source" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
