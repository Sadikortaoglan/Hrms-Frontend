import axios from "axios"

export default class CapabilityService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/capabilities`
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
}