// import axios from 'axios';
//
// import * as CryptoJS from "crypto-js";
//
// const HOST = window.location.hostname;
// const PASSWORD = 'Valantis';
// const API_BASE_URL = 'https://api.valantis.store:41000';
// // const API_BASE_URL = 'https://fakestoreapi.com';
// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//         '$host': HOST,
//     },
// })
//
// api.interceptors.request.use(config => {
//     const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
//     const authString = `${PASSWORD}_${timestamp}`;
//     config.headers['X-Auth'] = CryptoJS.MD5(authString).toString();
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
//
// api.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response && error.response.status === 401) {
//         console.error('Unauthorized request. Please check your credentials.');
//         // Redirect to login page or display an error message
//     }
//     return Promise.reject(error);
// });
//
//
// class Api{
//    static async getIds(offset, limit){
//        try {
//            const response = await api.post('/',{
//                action: 'get_ids',
//                params: {offset, limit},
//                headers: {
//                    '$host': HOST
//                },
//            });
//            return response.data.result;
//        }catch(error){
//            throw error
//        }
//    }
//
//     static async getItems(ids){
//         try {
//             const response = await api.post('/',{
//                 action: 'get_items',
//                 params: {ids},
//                 headers: {
//                     '$host': HOST
//                 },
//             });
//             return response.data.result;
//         }catch(error){
//             throw error
//         }
//     }
//
//     static async getFields(field, offset, limit){
//         try {
//             const response = await api.post('/',{
//                 action: 'get_fields',
//                 params: {field, offset, limit},
//                 headers: {
//                     '$host': HOST
//                 },
//             });
//             return response.data.result;
//         }catch(error){
//             throw error
//         }
//     }
//
//     static async filter(parameter){
//         try {
//             const response = await api.post('/',{
//                 action: 'filter',
//                 params: {parameter},
//                 headers: {
//                     '$host': HOST
//                 },
//             });
//             return response.data.result;
//         }catch(error){
//             throw error
//         }
//     }
// }
//
// export default Api



import md5 from "md5";

const API_BASE_URL = 'https://api.valantis.store:41000';
const PASSWORD = 'Valantis';
const HOST = window.location.hostname;

function createRequest(action, params) {
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const hash = md5(`${PASSWORD}_${timestamp}`);
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            '$host': HOST,
            'X-Auth': hash
        },
        body: JSON.stringify({ action, params })
    };
}

async function makeRequest(endpoint, action, params) {
    const request = createRequest(action, params);
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, request);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const result = responseData.result;
        console.log(result)
        return result;

    } catch (error) {
        throw error;
    }
}

class Api {
    static async getIds(offset, limit) {
        try {
            return await makeRequest('/', 'get_ids', { offset, limit });
        } catch (error) {
            throw error;
        }
    }

    static async getItems(ids) {
        try {
            return await makeRequest('/', 'get_items', { ids });
        } catch (error) {
            throw error;
        }
    }

    static async getFields(field, offset, limit) {
        try {
            return await makeRequest('/', 'get_fields', { field, offset, limit });
        } catch (error) {
            throw error;
        }
    }

    static async filter(parameter) {
        try {
            return await makeRequest('/', 'filter', { parameter });
        } catch (error) {
            throw error;
        }
    }
}

export default Api;


