import axios from "axios"

export default class SchoolService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/school`

    add(curriculumVitae){
       return axios.post(`${this.controllerUrl}/add`,curriculumVitae) 
    }
}