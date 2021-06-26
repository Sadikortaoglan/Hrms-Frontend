import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from "semantic-ui-react";

export default function EmployerLogin() {
    return (
        <div>
              <Grid 
        textAlign="center" 
        style={{ height: "100vh"}}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450}}>
          <Header as="h2" color="yellow" textAlign="center" >
            İŞ VEREN GİRİŞ EKRANI
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="purple" fluid size="large" as={NavLink} to ="/jobSeekertadd">
                Giriş Yap
              </Button>
            </Segment>
          </Form>
          <Message>
            Yeni Misin? <NavLink to="/employerregisterpage">Kayıt Ol</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
        </div>
    )
}
