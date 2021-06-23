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
        <div>
            <Card.Group itemsPerRow={3} style={{marginBottom: '2em'}}>
                {
                    
                    jobPostings.map(jobPosting => (
                        <Card color={jobPosting.id > 10000 ? 'red' : 'teal'} key={jobPosting.id} as={NavLink} to={`/job-ads/get/${jobPosting.id}`} >
                            <Image label={{
                                color: jobPosting.workStyle === 'Uzaktan' ? 'blue' : 'teal',
                                content: jobPosting.workStyle,
                                icon: jobPosting.workStyle === 'Uzaktan'  ? 'desktop' : 'suitcase',
                                ribbon: true
                            }}
                                src={jobPosting.id % 2 === 0 ? 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg' : 'https://image.freepik.com/free-vector/technology-company-logo-template_1061-20.jpg'} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{jobPosting.profession.name}</Card.Header>
                                <Card.Meta>{jobPosting.profession.employer.companyName}</Card.Meta>
                                <Card.Meta style={{ marginBottom: '1em' }}>{jobPosting.city} <Icon name='map marker alternate' /></Card.Meta>
                                <Card.Description>{jobPosting.profession.description}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='check' color='green' /> {jobPosting.positionCount} pozisyon
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
            <Button as={NavLink} to='/job-ads/add' animated='fade' floated='right' circular size='large' color='blue' style={{width: '120px'}}>
                <Button.Content visible><Icon name='add'/></Button.Content>
                <Button.Content hidden>Ekle</Button.Content>
            </Button>
        </div>
    )
}
