import axios from "axios";
import { API_CONFIG } from "./config";

export const apiClient = axios.create({
    baseURL:API_CONFIG.baseURL,
    timeout:API_CONFIG.timeOut,
    headers:{
        'Content-Type':'application/json',
    }
});
