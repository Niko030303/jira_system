// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import {User} from "./screens/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: { user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data:{username: string, password: string}) => {
    fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response: Response) => {
            if (response.ok){
                handleUserResponse(await response.json())
            }
        }
    );
}