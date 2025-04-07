"use client"


import { LineChart, Line, XAxis, YAxis, CartesianGrid,  Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 400,
    expense: 240,
  },
  {
    name: 'Feb',
    income: 300,
    expense: 139,
  },
  {
    name: 'Mar',
    income: 200,
    expense: 500,
  },
  {
    name: 'Apr',
    income: 378,
    expense: 390,
  },
  {
    name: 'May',
    income: 489,
    expense: 360,
  },
  {
    name: 'Jun',
    income: 390,
    expense: 380,
  },
  {
    name: 'Jul',
    income: 349,
    expense: 430,
  },
  {
    name: 'Aug',
    income: 349,
    expense: 430,
  },
  {
    name: 'Sep',
    income: 490,
    expense: 423,
  },
  {
    name: 'Oct',
    income: 437,
    expense: 325,
  },
  {
    name: 'Nov',
    income: 196,
    expense: 278,
  },
  {
    name: 'Dec',
    income: 365,
    expense: 419,
  },
];

const FinanceCharts = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* title */}
        <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Investment</h1>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis type="number" domain={[100,500]} axisLine={false} tickLine={false} tickMargin={10} />
          
          {/* <Legend /> */}
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceCharts