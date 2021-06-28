import axios from "axios"

export default class ProfessionService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/profession`

    getall(){
        return axios.get(`${this.controllerUrl}/getall`) 
     }
}