import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type Data = { year: number; co2: number; saving: number }

export default function Dashboard() {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    fetch('/energy.json')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => setData([]))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-sky-600 mb-4">Dashboard</h1>
      <div className="bg-white rounded shadow p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="co2" stroke="#0284c7" />
            <Line dataKey="saving" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
