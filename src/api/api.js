import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {'API-KEY': 'f5cecabc-ea5e-4b2d-aa4e-36510b84323d'}
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
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        } ).then(response => response.data)

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