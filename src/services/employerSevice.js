import axios from "axios"

 
export default class EmployerService{

    controllerUrl=`${process.env.REACT_APP_API_URL}/employers`;
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }

}