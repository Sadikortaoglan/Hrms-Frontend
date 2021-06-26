import axios from "axios"

export default class JobPostingService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/jobposting`;
    
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
    
    add(jobPosting){
        return axios.get(`${this.controllerUrl}/jobPosting`,jobPosting)
    }

    findByActiveTrue(){
        return axios.get(`${this.controllerUrl}/findByActiveTrue`)
    }
    
    findByUpdatedAtIsActiveTrue(){
        return axios.get(`${this.controllerUrl}/findByUpdatedAtIsActiveTrue`)
    }    
}