'use client';

import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const data = [
  {
    name: 'Quote requested',
    uv: 30,
    fill: '#5A6BFF',
  },
  {
    name: 'Project completed',
    uv: 60,
    fill: '#A1E3B3',
  },
  {
    name: 'Claimed deals',
    uv: 90,
    fill: '#4B5563',
  },
];

export default function PastPerformance() {
  return (
    <div className="border  border-gray mt-1 text-black p-8 rounded-xl w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Past Performance</h2>
      <div className="flex  items-center">
        <RadialBarChart
          width={300}
          height={300}
          cx={150}
          cy={150}
          innerRadius={30}
          outerRadius={140}
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            label={false}
            background
            dataKey="uv"
          />
        </RadialBarChart>

        <div className="flex flex-col gap-4 ml-1">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: entry.fill }}
              ></div>
              <span className="text-sm" style={{ color: entry.fill }}>
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
