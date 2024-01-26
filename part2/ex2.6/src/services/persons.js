import axios from "axios";
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
}

const createPerson = newObject => {
  return axios.post(baseUrl, newObject)
    .then(response => {
      console.log("Post response object", response.data)
      return response.data
    })
}

const updatePerson = (updatedPerson, id) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson)
    .then(response => {
      console.log("updated Person", response.data)
      return response.data
    })
}

const deletePerson = deleteId => {
  return axios.delete(`${baseUrl}/${deleteId}`)
    .then(response => {
      console.log(response.data)
    })
}
export default { createPerson, getAll, deletePerson, updatePerson }
