import React from 'react'
import Dashboard from './Dashboard'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Dashboard3 from './Dashboard3'
import Dashboard4 from './Dashboard4'

const LongDashboard = () => {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto bg-[#191D33] ">
      <Dashboard/>
      <Dashboard1/>
      <Dashboard2/>
      <Dashboard3/>
      <Dashboard4/>
    </div>
  )
}

export default LongDashboard
