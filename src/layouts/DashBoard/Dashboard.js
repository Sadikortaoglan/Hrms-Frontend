import React from "react";
import { Route } from "react-router-dom";
import { Grid,Container } from "semantic-ui-react";
import Filters from "../Filters/filters";
import JobPosting from "../../components/JobPosting/JobPosting";
import EmployersList from "../../components/Employer/EmployerList";
import CurriculumVitaeList from "../../components/CurriculumVitae/CurriculumVitaeList";
import EmployerRegisterPage from "../../components/Employer/EmployerRegister";
import EmployerLogin from "../../components/Employer/EmployerLogin";
import Login from "../../components/JobSeekers/JobSeekerRegister";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Container>
          <Route exact path="/employerlogin" component={EmployerLogin}></Route>
          <Route exact path="/jobseekerregister" component={Login}></Route>
          <Route exact path="/employerregister" component={EmployerRegisterPage}></Route>
          <Route exact path="/employerregisterpage" component={EmployerRegisterPage}></Route>
          </Container>
          <Grid.Column width={4}>
            <Route exact path="/employers" component={Filters}></Route>
            <Route exact path="/curriculumvitae"component={Filters}></Route>
            <Route exact path="/jobseeker"component={Filters}></Route>
            <Route exact path="/jobposting" component={Filters}></Route>
            <Route exact path="/"component={Filters}></Route>
          </Grid.Column>
          <Grid.Column width={12}>
           {/* <Route exact path="/jobseeker" component={JobSeekerList}></Route> */}
            <Route exact path="/employers" component={EmployersList}></Route>
            <Route exact path="/curriculumvitae" component={CurriculumVitaeList}></Route>
            <Route exact path="/jobposting" component={JobPosting}></Route>


          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
