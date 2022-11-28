import axios from "axios"

export const allAgents = async (state) => {
  const url = 'https://valorant-api.com/v1/agents'
  const response = await axios.get(url)
  const object = response.data.data
  state(object)
  console.log(object)
}


export const oneAgent = async (uuid, state) => {
  const url = `https://valorant-api.com/v1/agents/${uuid}`
  const response = await axios.get(url)
  const object = response.data.data
  state(object)
  console.log(object)
}

export const rol = async (uuid, state) => {
  const url = `https://valorant-api.com/v1/agents/${uuid}`
  const response = await axios.get(url)
  const object = response.data.data.role
  state(object)
  console.log(object)
}
