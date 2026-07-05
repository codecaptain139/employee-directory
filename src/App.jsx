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

const handleAddEmployee = () => {
  const newEmployee = {
    id: employees.length + 1,
    name,
    role,
    country
  }

  setEmployees([...employees, newEmployee])
  setName("");
  setRole("");
  setCountry("");

  console.log(newEmployee);
}

const [name, setName] = useState("");
const [role, setRole] = useState("");
const [country, setCountry] = useState("");

  return(
    <div className='app'>
      <h1>Employee Directory</h1>

      <div className="form-group">
        <label>Name: </label>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Role: </label>
        <input type="text" placeholder='Enter Role' value={role} onChange={(e) => setRole(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Country: </label>
        <input type="text" placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)}/>
      </div>

      <button onClick={handleAddEmployee}>Add Employee</button>

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
