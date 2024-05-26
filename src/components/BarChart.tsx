import { IData } from "@/interfaces/IData";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const BarGraph = ({ data }: { data: IData[] }) => {
  const count = data.reduce((acc: { name: string; count: number }[], curr) => {
    const found = acc.find((el) => el.name === curr.data);
    if (found) {
      found.count++;
    } else {
      acc.push({ name: curr.data, count: 1 });
    }
    return acc;
  }, []);

  console.log(count);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={count}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload) {
              return (
                <div className="bg-white text-black  p-2">
                  <p>{`${label} : ${payload[0]?.payload?.count}`}</p>
                  <p>{}</p>
                </div>
              );
            }
            return null;
          }}
        />

        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="count" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
