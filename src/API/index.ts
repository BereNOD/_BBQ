import axios, { AxiosRequestConfig } from 'axios'

const request = async (url: string, config?: AxiosRequestConfig) => {
    try {
        const { data } = await axios(url, config)
        return data
    } catch (error) {
        console.error(error);
    }
}

export default request