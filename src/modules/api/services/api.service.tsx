import axios from "axios";
import { API_BASE_URL } from "../constants/api.constant";
import { DeleteAPIType, GetAPIType, PostAPIType, PutAPIType } from "./api.interface";

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
  });

export const getApi = ({url}: GetAPIType) => {
    return instance({
        method: 'get',
        url
    })
}

export const postApi = ({url, data}: PostAPIType) => {
    return instance({
        method: 'post',
        url,
        data
    })
}

export const putApi = ({url, data}: PutAPIType) => {
    return instance({
        method: 'put',
        url,
        data
    })
}

export const deleteApi = ({url}: DeleteAPIType) => {
    return instance({
        method: 'delete',
        url
    })
}