import axios from "axios";


export default class JobSeekerService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/jobseekers`
    getAll(){ 
       return axios.get(`${this.controllerUrl}/getall`)
       
    }
    deleteById(id){ 
      return axios.post(`${this.controllerUrl}/deleteById`+id)
      
   }
}