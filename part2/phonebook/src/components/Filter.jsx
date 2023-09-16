const Filter = ({ fun, state }) => {
  return (
    <div>
      filter shown with: <input value={state} onChange={fun} />
    </div>
  )
}

export default Filter
