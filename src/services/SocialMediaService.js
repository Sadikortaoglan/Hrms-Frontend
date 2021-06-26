import axios from "axios"


export default class SocialMediaService{

    controllerUrl=`${process.env.REACT_APP_API_URL}/socialmedia`
    getAll(){
        return axios.get(`${this.controllerUrl}/getall`)
    }
}