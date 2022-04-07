import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "http://localhost:8080/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}

export async function getall(){
    const base = "http://localhost:8080/booking"
    let data = await axios.get(base)
    return data
}