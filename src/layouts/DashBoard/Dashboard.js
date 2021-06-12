import React from 'react'

import { Grid, GridColumn, GridRow ,Container} from 'semantic-ui-react';
import JobSeekerList from '../../components/JobSeekersList/JobSeekerList';
import EmployerList from '../../components/EmployerList/EmployerList';


export default function Dashboard() {
    return (
        <div>
            <Container>
            <Grid>
                <GridRow >
                    <GridColumn width={6}>
                        <JobSeekerList />
                    </GridColumn>
                    <GridColumn width={10}>
                        <EmployerList/>
                    </GridColumn>
                </GridRow>
                <GridRow>
                </GridRow>
            </Grid>
            </Container>
        </div>
    )
}
