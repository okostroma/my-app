import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': 'bb8f8084-21b5-4fee-a3b3-12a4d9a130ba'}
    }
)


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>
            response.data)
    },
    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    }
}

export const authAPI = {
    getAuthData(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(response => response.data)
    }
}