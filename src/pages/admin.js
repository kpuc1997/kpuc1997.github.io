import React from 'react';

import {
    withAuthenticator,
    AmplifySignOut,
} from '@aws-amplify/ui-react';

class Admin extends React.Component{
    render(){
        return <div>
        <AmplifySignOut />
        </div>
    }
}

export default withAuthenticator(Admin);