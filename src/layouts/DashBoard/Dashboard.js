import React from "react";
import JobSeekerList from "../../components/JobSeekers/JobSeekerList";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Filters from "../Filters/filters";
import JobPosting from "../../components/JobPosting/JobPosting";
import EmployersList from "../../components/Employer/EmployerList"
import CurriculumVitaeList from "../../components/CurriculumVitae/CurriculumVitaeList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobPosting/>
            <Route exact path="/jobseeker" component={JobSeekerList}></Route>
            <Route exact path="/employers" component={EmployersList}></Route>
            <Route exact path="/curriculumvitae" component={CurriculumVitaeList}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
