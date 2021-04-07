import React from 'react';

import {
    InputGroup,
    FormControl,
} from 'react-bootstrap';

// Renders a text area input field for the admin page.

// Props:
//      - title: gives your displayed title for the input field
//      - name: the name of the field in the 'inputFields' set state.

const AdminTextArea = (props) => (
    <InputGroup>
        <InputGroup.Prepend>
        <InputGroup.Text>{props.title}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" name={props.name} rows={3} value={props.value} onChange={props.onChange}/>        
    </InputGroup>
)

export default AdminTextArea;