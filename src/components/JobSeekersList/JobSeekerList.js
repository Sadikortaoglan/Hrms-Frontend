import React, { useEffect, useState } from "react";

import {Table } from "semantic-ui-react";
import JobSeekerService from "../../services/JobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]); //declarat
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getAll().then((result) => setJobSeekers(result.data.data));
  });
  return (
    <div>
         <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Identity Number</Table.HeaderCell>
                            <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            jobSeekers.map((jobSeeker) => (
                                <Table.Row>
                                    <Table.Cell>{jobSeeker.id}</Table.Cell>
                                    <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                    <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                    <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                                    <Table.Cell>{jobSeeker.dateOfBirth}-04-15</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>

    </div>
  );
}
