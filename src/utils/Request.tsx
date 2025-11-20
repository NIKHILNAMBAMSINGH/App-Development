import axios from "axios";


const API_BASE_URL = "http://10.0.2.2:8080";
export const request = ({ url, method, data }) => {

     const fullUrl = `${API_BASE_URL.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
     console.log(fullUrl)
    return axios({
        method: method || 'get',
        url: fullUrl,
        data,
    });
}