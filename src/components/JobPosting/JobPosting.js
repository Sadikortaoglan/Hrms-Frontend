import React,{useState,useEffect} from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import JobPostingService from '../../services/JobPostingService';

export default function JobPosting() {
    const [jobPostings, setJobPosting] = useState([])
    useEffect(() => {
        let jobPostingService=new JobPostingService();
        jobPostingService.getAll().then(result=>setJobPosting(result.data.data))
    }, [])
    
    return (
        <div className="ui four link cards"> 
     <Card.Group style={{width:"150%"}}>
    
      {jobPostings.map(jobPosting=>(
        <Card fluid style={{marginTop:"20px"}}>
        <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='../../logo192.png'
        />
        <Card.Header>{jobPosting.jobDescription}</Card.Header>
       
        <Card.Meta> <Icon name="location arrow"></Icon><strong>{jobPosting.updatedAt}</strong></Card.Meta>
        <Card.Description>
          Steve wants to add you to the group 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group className='ui two buttons'>
          <Button basic color='red'>
            Decline
          </Button>
        </Button.Group>
      </Card.Content>
        </Card> 
      ))}
      
      
  </Card.Group> 
        </div>
    )
}
