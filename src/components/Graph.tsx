import { useCallback, useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
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
  const [barData, setBarData] = useState([]);
  const [valueCategory, setValueCategory] = useState("");

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
    data.sort(
      (a: { month: number }, b: { month: number }) => a.month - b.month
    );
    const dataWithMonthNames = data.map((item: { month: number }) => ({
      ...item,
      month: monthNames[item.month - 1],
    }));
    if (type === "bar") {
      const count = dataWithMonthNames.reduce(
        (acc: { name: string; count: number }[], curr: { data: string }) => {
          const found = acc.find((el) => el.name === curr.data);
          if (found) {
            found.count++;
          } else {
            acc.push({ name: curr.data, count: 1 });
          }
          return acc;
        },
        []
      );
      console.log(count);
      setBarData(count);
      return;
    }
    console.log(data);
    setData(dataWithMonthNames);
  }, [category, date, selectedTimeUnit, type]);

  useEffect(() => {
    fetchGraphData();
  }, [fetchGraphData]);

  useEffect(() => {
    switch (category) {
      case "weight":
        setValueCategory("kg");
        break;
      case "mood":
        setValueCategory("moodLvl");
        break;

      default:
        setValueCategory("");
    }
  }, [category]);

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
                      <p>{`${label} : ${payload[0]?.payload?.data} ${valueCategory}`}</p>
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
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
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
      )}
    </div>
  );
};
export default Graph;
