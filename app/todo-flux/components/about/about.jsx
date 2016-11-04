import React from 'react';
import {render} from 'react-dom';

class About extends React.Component {
    constructor(props) {
      super(props);
  }   
    
  render () {   
    return (        
        <div>
           <h1>About</h1>
           <p>This application uses the following technologies</p>
            <ul>
                <li> React JS</li>
                <li> React Router</li>
                <li> Flux</li>
                <li> Webpack</li>
            </ul>
        </div>
    );      
  }
}

export default About;

