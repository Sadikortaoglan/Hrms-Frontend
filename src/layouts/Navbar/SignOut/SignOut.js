import React from 'react'
import { Button, ButtonOr, Menu } from 'semantic-ui-react'

export default function SigOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button onClick={signIn} color="instagram">Giriş Yap</Button>
            <ButtonOr>Or</ButtonOr>
            <Button color="facebook">Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}

