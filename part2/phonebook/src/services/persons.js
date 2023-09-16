import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((respons) => respons.data)
}

const addPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((respons) => respons.data)
}

const deletePerson = (id) => {
  return axios.delete(baseUrl.concat(`/${id}`))
}

export default { getAll, addPerson, deletePerson }
