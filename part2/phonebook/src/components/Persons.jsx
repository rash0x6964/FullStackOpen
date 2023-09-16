const SinglePerson = ({ name, number, buttonFun }) => {
  return (
    <tr>
      <td>
        {name} {number}
      </td>
      <td>
        <button onClick={buttonFun}>delete</button>
      </td>
    </tr>
  )
}

const Persons = ({ array, deleteFun }) => {
  return (
    <table>
      <tbody>
        {array.map((item) => (
          <SinglePerson
            key={item.name}
            name={item.name}
            number={item.number}
            buttonFun={() => deleteFun(item)}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Persons
