import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "https://capstone-prograd.herokuapp.com/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}

export async function getall(){
    const base = "https://capstone-prograd.herokuapp.com/booking"
    let data = await axios.get(base)
    return data
}