// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发

import {User} from "screen/project-list/search-pannel";

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUser
