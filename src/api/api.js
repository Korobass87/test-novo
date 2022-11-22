import axios from "axios";


const baseURL= 'http://185.244.172.108:8081//v1/outlay-rows/entity/'
const id= "21718"


export const fetchRow = axios.get(`${baseURL}${id}/row/list`)

export function changeRow( data) {return axios.post(`${baseURL}${id}/row/${data.id}/update`, {...data})}

export function addRowApi( data) {return axios.post(`${baseURL}${id}/row/create`, {...data})}

export function deleteRowApi(rId) { return axios.delete(`${baseURL}${id}/row/${rId}/delete`)}




