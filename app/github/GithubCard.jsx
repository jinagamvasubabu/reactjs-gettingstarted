import React from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';

class GithubCard extends React.Component {
  constructor(props){
   super(props);
   this.state =  {
       usersLoaded: false
   };      
  }
  
  componentDidMount (){
    console.log("in card:"+this.props.name);
    var self = this;
    reqwest({
        url: 'https://api.github.com/users/'+this.props.name,
        method: 'get',
        error: function (err) { 
          self.setState({
               usersLoaded:false
          });
        },
        success: function (resp) {
           self.setState({
               usersLoaded:true,
               resp
           });
        }
    }); 
  } 
    
  render () {
    if(this.state.usersLoaded){
        return (
            <div>
                <img src={this.state.resp.avatar_url} width="80"/>
                <h4>Name: {this.state.resp.login}</h4>
                <hr/>
            </div>
        );
    }
    else {
        return null;  
    }          
  }
}

export default GithubCard;