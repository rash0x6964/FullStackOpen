const PersonForm = ({ funObj, stateObj }) => {
  const { nameStat: newName, numberStat: newNumber } = stateObj
  const {
    nameFun: handleNameChange,
    numberFun: handleNumberChange,
    formFun: addNewObj,
  } = funObj
  return (
    <form onSubmit={addNewObj}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        numbers: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
