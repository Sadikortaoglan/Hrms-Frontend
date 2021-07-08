import axios from "axios"
export default class AuthService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/auth`;

registerForJobSeeker(jobSeeker){ 
    return axios.post(`${this.controllerUrl}/registerForJobSeeker`,jobSeeker);
    
 }
 registerForEmployer(employer){
     return axios.post(`${this.controllerUrl}/registerForEmployer`,employer);
 }
}