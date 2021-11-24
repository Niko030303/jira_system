

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    token?: string,
    data?: object
}

export const http = async (endpoint:string, {data, token, headers, ...customConfig}: Config) => {
    const config = {
        method: 'GET',
        headers:{
            Authorization: token ? `Bearer $`
        }
    }
}