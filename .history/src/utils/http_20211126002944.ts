import qs from 'qs'
import * as auth from '../auth-provider'
import { useAuth } from '../context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    token?: string,
    data?: object
}

export const http = async (endpoint:string, {data, token, headers, ...customConfig}: Config= {}) => {
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

    //axios和fetch的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
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
                return Promise.reject(data)
            }
        })
}

//JS中的typeof，是在runtime时运行的
//return typeof 1 === 'number'

//TS中的typeof，是在静态环境运行的
//return ...

export const useHttp = () => {
    const {user} = useAuth()
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token})
} 