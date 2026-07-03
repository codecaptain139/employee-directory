// import { useState } from 'react'
import './App.css'

function EmployeeCard({name, role, country}) {
  return(
    <div className='card'>
      <p>{name}</p>
      <p>{role}</p>
      <p>{country}</p>
    </div>
  )
}

function App() {
  const employeeData = [
    {
      id: 1,
      name: "Zarvis",
      role: "Frontend Developer",
      country: "India"
    },
    {
      id: 2,
      name: "Lucifer",
      role: "Backend Developer",
      country: "India"
    },
    {
      id: 3,
      name: "Omnitrex",
      role: "Fullstack Developer",
      country: "India"
    }
  ]

  return(
    <div className='app'>
      <h1>Employee Directory</h1>

      {
        employeeData.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            country={employee.country}
          />
        ))
      }
    </div>
  )
}

export default App
