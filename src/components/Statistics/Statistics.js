import React from 'react';
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quiz = useLoaderData();
  const total1 = quiz.data[0].total;
  const total2 = quiz.data[1].total;
  const total3 = quiz.data[2].total;
  const total4 = quiz.data[3].total;
  const data = [
    { name: "React", total: total1, pv: 2400, amt: 2400 },
    { name: "javascript", total: total2, pv: 2400, amt: 2400 },
    { name: "CSS", total: total3, pv: 2400, amt: 2400 },
    { name: "Git", total: total4, pv: 2400, amt: 2400 },
  ];

  console.log(quiz);

  return (
    <div className="statistics">
      <h2 className=" mt-5 mb-5 text-white text-2xl">Statistics data</h2>
      <div className='flex justify-center mt-8 w-[100%] h-[350px]'>
        <div className='max-w[100%] w-[650px]'>
          <ResponsiveContainer>
            <LineChart
              className="mx-auto"
              width={350}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;