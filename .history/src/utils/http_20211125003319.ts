

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    token?: string,
    
}

export const http = async (endpoint:string, {data, token, headers, ...customConfig}: RequestInit) => {

}