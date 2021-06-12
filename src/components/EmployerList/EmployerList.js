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
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            employers.map((employer) => (
                                <Table.Row>
                                    <Table.Cell>{employer.İD}</Table.Cell>
                                    <Table.Cell>{employer.companyName}</Table.Cell>
                                    <Table.Cell>{employer.status}</Table.Cell>
                                    <Table.Cell>{employer.webSite}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
        </div>
    )
}
