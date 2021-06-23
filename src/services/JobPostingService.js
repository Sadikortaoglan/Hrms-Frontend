import axios from "axios"

export default class JobPostingService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/jobposting`;
    
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
    
    add(){
        return axios.get(`${this.controllerUrl}/add`)
    }

    findByActiveTrue(){
        return axios.get(`${this.controllerUrl}/findByActiveTrue`)
    }
    
    findByUpdatedAtIsActiveTrue(){
        return axios.get(`${this.controllerUrl}/findByUpdatedAtIsActiveTrue`)
    }    
}