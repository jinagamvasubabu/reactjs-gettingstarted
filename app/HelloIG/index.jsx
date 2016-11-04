import React from 'react';
import {render} from 'react-dom';
import Clock from './Clock.jsx';
class App extends React.Component {

    render() {
        return (
            <Clock name={'Hello IG'}/>
        )
    }

}

render(<App/>, document.getElementById('app'));
module.hot.accept();