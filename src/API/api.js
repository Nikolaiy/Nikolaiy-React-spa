import * as axios from "axios";

const urlBase = 'https://social-network.samuraijs.com/api/1.0/';
const auth = {
    withCredentials: true
};
const authKey = {
    withCredentials: true,
    headers: {'API-KEY': '0bef6b48-7f84-43ca-905f-8c552e5d5a91'}
};


export const getUsers = (activePage = 1, pageCount = 10) => {
    return axios.get(urlBase + `users?page=${activePage}&count=${pageCount}`,
        {
            withCredentials: true
        })
};
export const activePage = (pageNumber, pageCount) => {
    return axios.get(urlBase + `users?page=${pageNumber}&count=${pageCount}`, {
        withCredentials: true
    })
};
export const follow = (userId) => {
    return axios.delete(urlBase + `follow/${userId}`, authKey)
};
export const unfollow = (userId) => {
    return axios.post(urlBase + `follow/${userId}`, {}, authKey)
};
export const authMe = () => {
    return axios.get(urlBase + 'auth/me', auth)
};
export const profilePage = (userId) => {
    return axios.get(urlBase + 'profile/' + userId)
}