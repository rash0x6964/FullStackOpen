import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data)
    })
  }, [])

  const addNewObj = (e) => {
    e.preventDefault()
    const newObj = { name: newName, number: newNumber }
    const exist = persons.filter((item) => item.name === newObj.name)

    if (exist.length === 0) {
      setPersons(persons.concat(newObj))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }

  const matchPersons = persons.filter((item) =>
    item.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter fun={handleFilterChange} state={newFilter} />
      <h3>Add a new</h3>
      <PersonForm
        funObj={{
          nameFun: handleNameChange,
          numberFun: handleNumberChange,
          formFun: addNewObj,
        }}
        stateObj={{ nameStat: newName, numberStat: newNumber }}
      />
      <h2>Numbers</h2>
      <Persons array={matchPersons} />
    </div>
  )
}

export default App
