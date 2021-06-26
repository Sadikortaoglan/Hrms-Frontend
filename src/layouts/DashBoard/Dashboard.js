import React from "react";
import JobSeekerList from "../../components/JobSeekers/JobSeekerList";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Filters from "../Filters/filters";
import JobPosting from "../../components/JobPosting/JobPosting";
import EmployersList from "../../components/Employer/EmployerList"
import CurriculumVitaeList from "../../components/CurriculumVitae/CurriculumVitaeList";
import EmployerLogin from "../../components/Employer/EmployerLogin";
import JobSeekerRegisterPage from "../../components/JobSeekers/JobSeekerAdd";
import EmployerRegisterPage from "../../components/Employer/EmployerRegister";

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
            <Route exact path="/jobSeekerAdd" component={EmployerLogin}></Route>
            <Route exact path="/jobseekerregister" component={JobSeekerRegisterPage}></Route>
            <Route exact path="/employerregister" component={EmployerRegisterPage}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
