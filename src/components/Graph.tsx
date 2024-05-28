import { useCallback, useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { BarGraph } from "./BarChart";
import { GraphProps, IData } from "@/types/GraphDataTypes";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Graph = ({ category, selectedTimeUnit, date, type }: GraphProps) => {
  const [data, setData] = useState<IData[]>([]);

  const fetchGraphData = useCallback(async () => {
    let url = "";
    // fetch data from API
    if (selectedTimeUnit === "year") {
      url = `http://localhost:8080/${category}/tempdata?year=${date?.year}`;
    } else if (selectedTimeUnit === "month") {
      url = `http://localhost:8080/${category}/tempdata?year=${date?.year}&month=${date?.month}`;
    } else if (selectedTimeUnit === "day") {
      url = `http://localhost:8080/${category}/tempdata?year=${date?.year}&month=${date?.month}&week=${date?.week}&day=${date?.day}`;
      console.log(url);
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log("graph", data);
    data.sort(
      (a: { month: number }, b: { month: number }) => a.month - b.month
    );
    const dataWithMonthNames = data.map((item: { month: number }) => ({
      ...item,
      month: monthNames[item.month - 1],
    }));
    console.log(data);
    setData(dataWithMonthNames);
  }, [category, selectedTimeUnit, date]);

  useEffect(() => {
    fetchGraphData();
  }, [fetchGraphData]);

  return (
    <div className="w-full max-w-2xl h-full border border-slate-700 p-2 m-2 rounded-md bg-slate-100">
      {type === "line" ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            {category === "weight" ? (
              <YAxis domain={[40, 60]} />
            ) : (
              <YAxis domain={[0, 10]} />
            )}

            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload) {
                  return (
                    <div className="bg-white text-black  p-2">
                      <p>{`${label} : ${payload[0]?.payload?.data} ${
                        category === "weight" ? "kg" : ""
                      }`}</p>
                      <p>{}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <BarGraph data={data} />
      )}
    </div>
  );
};
export default Graph;
