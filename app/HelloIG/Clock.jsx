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

  tick(){    
      this.setState((prevState, props) => ({
          timeStamp: new Date().toLocaleTimeString() 
      }));
  };

  render() {
      return(
        <div>  
            <h1>{this.props.name}</h1>
            <h3> {this.state.timeStamp} </h3>  
        </div>
      );
  }
}

Clock.propTypes = {
    name: React.PropTypes.string.isRequired
}

Clock.defaultProps = {
    name: 'Hello IG'
}

export default Clock;