import axios from "axios"


export default class LanguageService{
    controllerUrl=`${process.env.REACT_APP_API_URL}/languages`
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
    
    languageWithJobSeekerAdd(language){
        return axios.post(`${this.controllerUrl}/languageWithJobSeekerAdd`,language)
    }
    l
}