import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Increment from './Increment.jsx';

class App extends React.Component {

    constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Increment number = {this.state.data}></Increment>
         </div>
      );
   }

}

render(<App/>, document.getElementById('app'));
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000)
module.hot.accept();