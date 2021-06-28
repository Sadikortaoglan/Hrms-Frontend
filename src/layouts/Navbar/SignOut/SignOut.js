import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { Button, ButtonOr, Menu } from 'semantic-ui-react'

export default function SigOut({signIn}) {
    return (
        <div>
            <Menu.Item>
          <Button color="instagram" style={{marginLeft:"10px"}} as={NavLink} to="/employerlogin">emp Girişi</Button>
            <Button  onClick={signIn} color="instagram" style={{marginLeft:"10px"}}>Üye Girişi</Button>
            <ButtonOr>Or</ButtonOr>
            <Button color="facebook">Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}

