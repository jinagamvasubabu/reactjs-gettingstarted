import React from 'react';

class DoneFrame extends React.Component {
    render() {     
        return (
            <div className="well text-center done-frame">
                <h2>{this.props.doneStatus}</h2>
                <button className="btn btn-default" onClick={this.props.resetGame}>Play again</button>
            </div>
        )
    }
}

export default DoneFrame;