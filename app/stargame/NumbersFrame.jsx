import React from 'react';

class NumbersFrame extends React.Component {
    render() {
        let numbers = [];
        let selectNumber = this.props.selectNumber;
        let usedNumbers = this.props.usedNumbers;
        
        for(let i=1;i<=9;i++){
            let className = "numbers selected-"+(this.props.selectedNumbers.indexOf(i) >= 0);
            className += " used-"+(usedNumbers.indexOf(i) >= 0);
            numbers.push(<span className={className} onClick={selectNumber.bind(null, i)}>{i}</span>);
        }
        return (
            <div id="numbers-frame">
                <div className="well">        
                    {numbers}
                </div>
            </div>
        )
    }
}

export default NumbersFrame;