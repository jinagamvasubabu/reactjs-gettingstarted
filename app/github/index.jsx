import React from 'react';
import {render} from 'react-dom';
import GithubCard from './GithubCard.jsx';
import FormInput from './FormInput.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          logins:[]
      };
      this.addCard = this.addCard.bind(this);
  }   
  
  addCard(loginToAdd) {
      if(loginToAdd){
        let logins = this.state.logins;
        logins.push(loginToAdd);
        this.setState({logins:logins}); 
      }
  }
    
  render () {   
    console.log("State changed:");
    return (        
        <div>
            <FormInput addCard={this.addCard}/>
            {this.state.logins.map(function(login){
                return <GithubCard name={login} />
            })}
        </div>
    );      
  }
}

render(<App/>, document.getElementById('app'));
module.hot.accept();