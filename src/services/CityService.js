import axios from "axios"

export default class CityService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/city`
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
}