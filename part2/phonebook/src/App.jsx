import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import './index.css'

const Notification = ({ message }) => {
	if (message === null) {
	  return null
	}

	return (
	  <div className='error'>
		{message}
	  </div>
	)
  }

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((data) => {
      setPersons(data)
    })
  }, [])

  const addNewObj = (e) => {
    e.preventDefault()
    const newObj = { name: newName, number: newNumber }
    const exist = persons.filter((item) => item.name === newObj.name)

    if (exist.length === 0) {
      personService.addPerson(newObj).then((data) => {
        setPersons(persons.concat(data))
      })
      setPersons(persons.concat(newObj))

	  setErrorMessage(`Added ${newObj.name}`)
	  setTimeout(() => {
		setErrorMessage(null)
	  }, 5000)

    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName("")
    setNewNumber("")
  }

  const deleteNewObj = (note) => {
    if (confirm(`Delete ${note.name} ?`)) {
      personService.deletePerson(note.id).then(() => {
        setPersons(persons.filter((item) => item.id != note.id))
      })
    }
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
	  <Notification message={errorMessage}/>
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
      <Persons array={matchPersons} deleteFun={deleteNewObj} />
    </div>
  )
}

export default App
