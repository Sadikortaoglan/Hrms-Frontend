
import axios from "axios"

export default class CurriculumVitaeService{
controllerUrl=`${process.env.REACT_APP_API_URL}/curriculumVitae`
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
}