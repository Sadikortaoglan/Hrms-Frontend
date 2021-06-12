import React from 'react'
import { Dropdown, Menu } from "semantic-ui-react";

export default function SignIn({signOut}) {
    return (
        <div>
            <Menu.Item>
        {/* <Image avatar spaced="right" src="" /> */}
        <Dropdown pointing="top left" text="Sadık" >
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
        </div>
    )
}
