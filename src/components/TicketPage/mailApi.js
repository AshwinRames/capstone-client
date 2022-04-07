import axios from 'axios'

export async function getMailApi(data) {
    const baseURL = "https://capstone-prograd.herokuapp.com/mail/"
    let incoming = await axios.post(baseURL, data)
    return incoming
}