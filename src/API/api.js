import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '0bef6b48-7f84-43ca-905f-8c552e5d5a91'},
});

export const userAPI = {
    getUsers(activePage = 1, pageCount = 10) {
        return instance.get(`users?page=${activePage}&count=${pageCount}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.post(`follow/${userId}`,)
            .then(response => response.data)
    },
    profilePage(userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    },
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
};

