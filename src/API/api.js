import * as axios from "axios";

const urlBase = 'https://social-network.samuraijs.com/api/1.0/';
const auth = {
    withCredentials: true
};
const authKey = {
    withCredentials: true,
    headers: {'API-KEY': '0bef6b48-7f84-43ca-905f-8c552e5d5a91'}
};


export const getUsers = () => {
    return axios.get(urlBase + `users?page=${this.props.activePage}&count=${this.props.pageCount}`, {
        withCredentials: true
    })
};
export const activePage = (pageNumber) => {
    return axios.get(urlBase + `users?page=${pageNumber}&count=${this.props.pageCount}`, {
        withCredentials: true
    })
};
export const follow = (userId) => {
    axios.delete(urlBase + `follow/${userId}`, authKey)
};
export const unfollow = (userId) => {
    axios.post(urlBase + `follow/${userId}`, {}, authKey)
};
export const authMe = () => {
    axios.get(urlBase + 'auth/me', auth)
};