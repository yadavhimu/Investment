"use client"


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    
    invest: 4000,
    expense: 2400,
  },
  {
    
    invest: 3000,
    expense: 1398,
  },
  {
    
    invest: 2000,
    expense: 6800,
  },
  {
  
    invest: 2780,
    expense: 3908,
  },
  {
   
    invest: 1890,
    expense: 4800,
  },
  {
    
    invest: 2390,
    expense: 3800,
  },
  {
    
    invest: 3490,
    expense: 4300,
  },
  {
   
    invest: 3490,
    expense: 4300,
  },
  {
    
    invest: 3490,
    expense: 4300,
  },
  {
    
    invest: 3490,
    expense: 4300,
  },
  {
    
    invest: 3490,
    expense: 4300,
  },
  {
    
    invest: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* title */}
        <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        </div>
        <ResponsiveContainer width="50%" height="90%">
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
          <YAxis axisLine={false} tickLine={false} tickMargin={20} />
          {/* <Tooltip /> */}
          <Legend />
          <Line type="monotone" dataKey="invest" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart