import React from 'react';

class AnswerFrame extends React.Component {
    render() {      
        let props = this.props;
        let selectedNumbers = props.selectedNumbers.map(function(i){
           return (
              <span onClick={props.unSelectNumber.bind(null, i)}>
                {i}
              </span> 
           ); 
        });
        
        return (
            <div id="answer-frame">
                <div className="well">
                    {selectedNumbers}
                </div>
            </div>
        )
    }
}

export default AnswerFrame;