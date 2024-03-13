import axios from 'axios';
import { BASE_URL } from '../config/app.config';

const API_URL = `${BASE_URL}/api/auth/`

const register = async (userInfo) => {
    return axios.post(API_URL+'signup', {
        username: userInfo[0],
        email: userInfo[1],
        password: userInfo[2],
    })
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data))
        return response;
    })
    .catch((error) => {
        return error.message
    });
};

const login = async (userInfo) => {
    return axios.post(API_URL+'signin', {
        username: userInfo[0],
        password: userInfo[1],
    })
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data))
        return response;
    })
    .catch((error) => {
        return error.message
    })
}


const logout = () => {
    localStorage.removeItem("user");
}

const methods = {
    register,
    login,
    logout
};

export default methods;