import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': 'd88efdc6-2899-4354-8370-9788e254d3dc'}
    }
)


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>
            response.data)
    },
    getAuthData(){
        return instance.get(`auth/me`).then(response => response.data)
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