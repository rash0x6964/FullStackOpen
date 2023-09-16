const SinglePerson = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  )
}

const Persons = ({ array }) => {
  return (
    <div>
      {array.map((item) => (
        <SinglePerson key={item.name} name={item.name} number={item.number} />
      ))}
    </div>
  )
}

export default Persons
