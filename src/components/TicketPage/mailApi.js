import axios from 'axios'

export async function getMailApi(data) {
    const baseURL = "http://localhost:8080/mail/"
    let incoming = await axios.post(baseURL, data)
    return incoming
}