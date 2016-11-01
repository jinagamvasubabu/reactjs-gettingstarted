import React from 'react';
import {render} from 'react-dom';
import StarsFrame from './StarsFrame.jsx';
import ButtonFrame from './ButtonFrame.jsx';
import AnswerFrame from './AnswerFrame.jsx';
import NumbersFrame from './NumbersFrame.jsx';
import DoneFrame from './DoneFrame.jsx';

let possibleCombinationSum = function(arr, n) {
      if (arr.indexOf(n) >= 0) { return true; }
      if (arr[0] > n) { return false; }
      if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
      }
      var listSize = arr.length, combinationsCount = (1 << listSize)
      for (var i = 1; i < combinationsCount ; i++ ) {
        var combinationSum = 0;
        for (var j=0 ; j < listSize ; j++) {
          if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
      }
      return false;
}

class Game extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          selectedNumbers:[],
          numberOfStars: this.getRandomNumber(),
          correct:null,
          usedNumbers:[],
          reDrawLimit:5,
          doneStatus: null    
        };
        
        this.selectNumber = this.selectNumber.bind(this);
        this.unSelectNumber = this.unSelectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.getSumOfSelectedNumbers = this.getSumOfSelectedNumbers.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.reDraw = this.reDraw.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
    
    getRandomNumber() {
        return Math.floor(Math.random()*9)+1;    
    }
    
    selectNumber(number) {
        let selectedNumbers = this.state.selectedNumbers;
        if(selectedNumbers.indexOf(number) < 0 && this.state.usedNumbers.indexOf(number) < 0) {
            selectedNumbers.push(number);
            this.setState({
                selectedNumbers,
                correct: null
            }); 
        }
    }
    
    resetGame() {
        this.setState({
          selectedNumbers:[],
          numberOfStars: this.getRandomNumber(),
          correct:null,
          usedNumbers:[],
          reDrawLimit:5,
          doneStatus: null 
        });    
    }
    
    unSelectNumber(number) {
        let selectedNumbers = this.state.selectedNumbers;
        let index = selectedNumbers.indexOf(number);
        selectedNumbers.splice(index,1);
        
        this.setState({
            selectedNumbers,
            correct:null
        })    
    }
    
    getSumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce(function(i,j){
            return i+j;
        }, 0);
    }
    
    checkAnswer() {
        let correct = (this.state.numberOfStars === this.getSumOfSelectedNumbers());
        this.setState({
           correct 
        });
    }
    
    acceptAnswer() {
        let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
           selectedNumbers: [],
           usedNumbers,
           correct: null,
           numberOfStars:  this.getRandomNumber()   
        }, function() {
                this.updateDoneStatus();
        })
    }
    
    reDraw() {
        if(this.state.reDrawLimit > 0){
            this.setState({
                selectedNumbers: [],
                correct: null,
                numberOfStars:  this.getRandomNumber(),
                reDrawLimit: this.state.reDrawLimit -1
            }, function() {
                this.updateDoneStatus();
            })
        }
    }

   
    isAnyPossibleSolutions() {
        let numberOfStars =  this.state.numberOfStars,
            possibleNumbers = [],
            usedNumbers = this.state.usedNumbers;
        for(let i=1;i<=9;i++){
            if(usedNumbers.indexOf(i) < 0){
                possibleNumbers.push(i);
            }
        }
        
        return possibleCombinationSum(possibleNumbers, numberOfStars);
        
    }
    
    updateDoneStatus() {
        if(this.state.usedNumbers.length === 9) {
            this.setState({
               doneStatus: 'Good job Smarty!!!' 
            });
            return;
        } else if(this.state.reDrawLimit === 0 && !this.isAnyPossibleSolutions()) {
            alert("Game Over!!!");
            this.setState({
               doneStatus: 'Game Over buddy!!!' 
            });
        }   
    }
    
    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let numberOfStars =this.state.numberOfStars;
        let usedNumbers = this.state.usedNumbers;
        let doneStatus = this.state.doneStatus;
        let BottomFrame;
        
        if(doneStatus) {
            BottomFrame = (
                <DoneFrame doneStatus={this.state.doneStatus} resetGame={this.resetGame}/>    
            );
        }else {
            BottomFrame = (
                <NumbersFrame selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers}/>
            ); 
        }
        
        return (
            <div id="game">
                <h2>play Nine</h2>
                <hr/>
                <div className="clearfix">
                    <StarsFrame stars={numberOfStars}/>
                    <ButtonFrame selectedNumbers={selectedNumbers} correct={this.state.correct} 
                    checkAnswer={this.checkAnswer} acceptAnswer={this.acceptAnswer} reDraw={this.reDraw}
                    reDrawLimit={this.state.reDrawLimit} />
                    <AnswerFrame selectedNumbers={selectedNumbers} unSelectNumber={this.unSelectNumber}/>
                </div>
                {BottomFrame}
            </div>
        );
    }
}

render(<Game />, document.getElementById('app'));
module.hot.accept();