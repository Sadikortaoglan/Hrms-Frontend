import React from 'react'
import { Input, Label, Menu, Form, Radio } from 'semantic-ui-react'

export default function filter() {
    return (
        <div>
        <Menu vertical>
            <Menu.Item>
                <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>

            <Menu.Item name='filter_1'>
                <Label color='teal'>1</Label>
                Filtre
            </Menu.Item>

            <Menu.Item name='filter_2'>
                <Label>2</Label>
                Filtre 2
            </Menu.Item>

            <Menu.Item name='filter_3'>
                <Form>
                    <Form.Group grouped>
                        <Form.Field label='Radio Filter' control={Radio} type='radio' name='radio_filters' />
                        <Form.Field label='Radio Filter' control={Radio} type='radio' name='radio_filters' />
                    </Form.Group>
                </Form>
            </Menu.Item>

            <Menu.Item name='filter_4'>
                <Label>3</Label>
                Filtre 3
            </Menu.Item>

            <Menu.Item name='filter_5'>
                <Form>
                    <Form.Group grouped>
                        <Form.Field label='Checkbox Filter' control='input' type='checkbox' />
                    </Form.Group>
                </Form>
            </Menu.Item>
        </Menu>
    </div>
    )
}
