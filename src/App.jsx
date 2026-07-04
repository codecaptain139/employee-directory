// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function EmployeeCard({id, name, role, country, onDelete}) {
  return(
    <div className='card'>
      <p>{name}</p>
      <p>{role}</p>
      <p>{country}</p>
      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  )
}

function App() {
  const [employees, setEmployees] = useState([
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
      country: "USA"
    },
    {
      id: 3,
      name: "Omnitrex",
      role: "Fullstack Developer",
      country: "Japan"
    }
  ]
);

const handleDelete = (id) => {
  const updateEmployees = employees.filter((employee) => {
    return employee.id !== id;
  });


  setEmployees(updateEmployees);
}

  return(
    <div className='app'>
      <h1>Employee Directory</h1>

      {
        employees.map((employee) => (
          <EmployeeCard
            key = {employee.id}
            id = {employee.id}
            name = {employee.name}
            role = {employee.role}
            country = {employee.country}
            onDelete = {handleDelete}
          />
        ))
      }
    </div>
  )
}

export default App;
