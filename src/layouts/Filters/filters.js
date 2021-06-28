  
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Menu } from 'semantic-ui-react'

export default class Categories extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
    return (
            
            <Grid fixed="top">
        <Grid.Column>
          <Menu fluid vertical tabular color="violet">            
          <Menu.Item as={NavLink} to="/jobseeker"
              name='jobseeker'
              active={activeItem === 'Jobseeker'}
              onClick={this.handleItemClick}
            />
          <Menu.Item as={NavLink} to="/employers"
              name='employers'
              active={activeItem === 'employers'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={NavLink} to="/curriculumvitae"
              name='curriculumvitae'
              active={activeItem === 'curriculumvitae'}
              onClick={this.handleItemClick}
            />            
          </Menu>
        </Grid.Column>

       
      </Grid>
    )
}
}