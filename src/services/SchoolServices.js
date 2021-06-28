import axios from "axios"

export default class SchoolService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/school`

    schoolWithJobSeekerAdd(curriculumVitae){
       return axios.post(`${this.controllerUrl}/schoolWithJobSeekerAdd`,curriculumVitae) 
    }
    getall(){
        return axios.get(`${this.controllerUrl}/getall`) 
     }
}