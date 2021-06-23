import React, { useEffect, useState } from "react";

import {Table } from "semantic-ui-react";
import EmployerService from "../../services/employerSevice";

export default function EmloyerList() {

    const [employers, setEmployers] = useState([]); //declarat
    useEffect(() => {
      let jobSeekerService = new EmployerService();
      jobSeekerService.getAll().then((result) => setEmployers(result.data.data));
    });
    return (
      
        <div> 
             <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Company Name</Table.HeaderCell>
                            <Table.HeaderCell>Web Site</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            employers.map((employer) => (
                                <Table.Row key={employer.id}>
                                    
                                    <Table.Cell>{employer.id}</Table.Cell>
                                    <Table.Cell>{employer.companyName}</Table.Cell>
                                    <Table.Cell>{employer.webSite}</Table.Cell>
                                    <Table.Cell>{employer.status}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
        </div>
    )
}
