import axios from "axios"
const baseUrl = "/api/persons"

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

const updatePerson = (newObject) => {
  const request = axios.put(baseUrl.concat(`/${newObject.id}`), newObject)
  return request.then((respons) => respons.data)
}

export default { getAll, addPerson, deletePerson, updatePerson }
