import React from 'react';
import {render} from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            timeStamp: null
        }
      this.tick = this.tick.bind(this);   
        
    } 
    
 componentDidMount() {
       this.timerID = setInterval(this.tick, 1000);
       // store intervalId in the state so it can be accessed later:
       this.setState((prevState, props) => ({
           timeStamp: new Date().toLocaleTimeString() 
       }));
  }

    componentWillUnMount() {
        clearInterval(this.timerID);
    }


  tick(){    
      this.setState((prevState, props) => ({
          timeStamp: new Date().toLocaleTimeString() 
      }));
  };

  render() {
      return(
        <div>  
            <h1> Hello IG </h1>
            <h3> {this.state.timeStamp} </h3>  
        </div>
      );
  }
}

export default Clock;