import { useCallback, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h2>{category.toUpperCase()}</h2>

      {type === "line" ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="data" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload) {
                  return (
                    <div className="bg-white text-black  p-2">
                      <p>{`${category} : ${payload[0]?.payload?.data}`}</p>
                      <p>{}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <BarGraph data={data} />
      )}
    </div>
  );
};
export default Graph;
