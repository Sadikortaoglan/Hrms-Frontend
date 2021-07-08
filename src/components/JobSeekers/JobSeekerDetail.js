import React from "react";
import { useParams, useState, useEffect } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export default function JobSeekerDetail() {
  let { id } = useParams();
  const [jobSeeker, setJobSeeker] = useState({});
  useEffect(() => {
    let jobSeekerService = new jobSeekerService();
    jobSeekerService.id(id).then((res) => setJobSeeker(res.data.data));
  }, []);
  return (
    <div>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
      )
    </div>
);
  }
