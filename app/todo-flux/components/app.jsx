import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
  }   
    
  render () {   
    return (        
        <div className="jumbotron">
           <h1>Todo Application - APP</h1>
           <p>React, React Router, Flux for ultra responsive web apps</p>
        </div>
    );      
  }
}

export default App;

