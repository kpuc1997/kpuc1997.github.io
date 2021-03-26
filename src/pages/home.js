import React from 'react';

import {
    Carousel,
    Nutshell,
} from '../components/components.js';

class Home extends React.Component{
    render(){
        return <div className="container">
                    <div className="row w-80 justify-content-center">
                    <div className="col-sm-6 col-12">
                        <Carousel />
                    </div>
                    <div className="col-sm-6">
                    <div id="Nutshell" className="row">
                        <div className="col">
                        <Nutshell />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                        
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
    }
}

export default Home;