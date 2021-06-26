import React from "react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card,Image,Button } from "semantic-ui-react";

export default function CurriculumVitaeList() { 
  let { id } = useParams();
  const [auths, setauth] = useState([]);
  const [languages, setlanguages] = useState([]);
  const [cities, setcities] = useState([]);
  const [capabilities, setcapabilities] = useState([]);
  const [socials, setsocial] = useState([]);
  const [workExperiences, setworkExperiences] = useState([]);
  const [curriculumVitaes, setcurriculumVitaes] = useState([]);
  const [jobSeekers, setjobSeekers] = useState([]);
  const [schools, setschools] = useState([])

 
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService.findByJobSeekerId(id).then((result) => {
      setcurriculumVitaes(result.data.data)
      setlanguages(result.data.languages)
      setauth(result.data.data.auths)
      setcities(result.data.data.cities)
      setcapabilities(result.data.data.capabilities)
      setsocial(result.data.data.socials)
      setworkExperiences(result.data.data.workExperiences)
      setjobSeekers(result.data.data.jobSeekers)
      setschools(result.data.data.school);
      console.log(result)
    });
  },[id]);

  return (
    <div>
      <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>   
  </Card.Group>
    </div>
  );
}
