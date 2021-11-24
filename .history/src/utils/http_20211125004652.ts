import qs from 'qs'
import * as auth from '../auth-provider'

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    token?: string,
    data?: object
}

export const http = async (endpoint:string, {data, token, headers, ...customConfig}: Config) => {
    const config = {
        method: 'GET',
        headers:{
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : '',
        },
        ...customConfig
    }

    if (config.method.toUpperCase()==='GET'){
        endpoint += `?${qs.stringify(data)}`
    }else{
        config.body = JSON.stringify(data||{})
    }

    return window.fetch(`${apiUrl}/${endpoint}`, config)
        .then(async response =>{
            if (response.status === 401) {
                await auth.logout
                window.location.reload() //页面刷新下
                return Promise.reject({message: '请重新登陆'})
            }
            const data = await response.json()
            if(response.ok){
                return data
            }else{
                reutrn Promise.reject(data)
            }
        })
}