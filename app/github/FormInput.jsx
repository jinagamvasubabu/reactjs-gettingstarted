import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let loginInput = this.refs.nameInput;
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
             <input placeholder="enter github login name" ref="nameInput"/>
             <button>Add</button>
            </form>
        );
    }
}

export default FormInput;
