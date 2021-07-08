import React, { useState } from "react";
import { Container, Menu,Button} from "semantic-ui-react";
import { NavLink,Link,useHistory } from 'react-router-dom'

import SignIn from "./SignIn/SignIn";
import SignOut from "./SignOut/SignOut";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history=useHistory();

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
      <div>
      <Menu inverted>
          <Container>
         
              <Menu.Item as={NavLink} to='/jobseeker' name='JobSeeker'/>
              <Menu.Item as={NavLink} to='/employers' name='Employers'/>
              <Menu.Item as={NavLink} to='/curriculumvitae' name='CurriculumVitae'/>

              <Menu.Menu position='right'>
                  <Menu.Item>
                     {/* <Input icon='search' placeholder='Search...' />*/}
                  </Menu.Item>
                  { isAuthenticated ? <SignIn  signOut={handleSignOut}/> : <SignOut signIn={handleSignIn}/> }
              </Menu.Menu>
          </Container>
      </Menu>
  </div>
    )
}










