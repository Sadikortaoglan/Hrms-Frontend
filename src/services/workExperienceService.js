import axios from "axios"

export default class WorkExperienceService{
    controllerUrl=`${process.env.RACT_APP_API_URL}/workExperiences`

    getall(){
        return axios.get(`${this.controllerUrl}/getall`)
    }

    workExperienceForJobSeekerAdd(){
        return axios.get(`${this.controllerUrl}/workExperienceForJobSeekerAdd`)
    }

}