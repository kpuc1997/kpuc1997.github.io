import React from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Spinner,
} from 'react-bootstrap';
import {
    withAuthenticator,
    AmplifySignOut,
} from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPageTexts } from '../graphql/queries';

import {
    AdminTextArea,
} from '../components/components';

class Admin extends React.Component{
    constructor(props) {
        super();
        this.state = {
            initialRender: false,
            // inputFields object property names should match graphql PageText names.
            inputFields: {
                description: '',
                descriptionTitle: '',
            }
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        // const PageText = await API.graphql(graphqlOperation(listPageTexts));
        // console.log(PageText);
        // let pageText;
        // for (pageText of PageText.data.listPageTexts.items) {
        //     console.log(pageText)
        // }
        this.setState({initialRender: true})
        console.log("Mounted baby!")
    }

    onSubmit() {
        console.log("submit button pressed")
    }

    handleChange(e) {
        // Uses the 'name' attribute of the FormControl to update the correct
        // 'inputFields' state property.
        
        // prevent default behavior of the HTML component
        e.preventDefault()

        // Pull out the 'name' attribute of the html tag that called the handleChange function 
        // from the event.
        // Also pull out the value of the change.
        let field = e.target.attributes.name.value;
        let value = e.target.value;

        // Get local copy of 'inputFields' state object.
        // modify the correct propery of the local copy.
        // Then set the new state with the modified copy.
        let inputFields = this.state.inputFields;
        inputFields[field] = value;
        this.setState({inputFields: inputFields})
    }
    
    render(){
        var inputField = this.state.inputFields
        if (this.state.initialRender) {
            return (
            <div>
                <h2>Home Page</h2>
                <AdminTextArea 
                    title='Description' 
                    name='description' 
                    value={inputField.description} 
                    onChange={this.handleChange}/>
                
                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
                <Button variant="dark" type="cancel">
                    Cancel
                </Button>
                
                <AmplifySignOut />
            </div>
            )
        }
        else {
            return (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <AmplifySignOut />
                </div>
            )
        }
    }
}

export default withAuthenticator(Admin);