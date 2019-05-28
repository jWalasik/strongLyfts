import React from 'react';

export default class Button extends React.Component {    
    state = {buttonDisabled: false}
    handleClick = (e) => {
        this.props.handleClick({
            timerModal: !this.props.timerModal  
        })
        this.state.buttonDisabled = true
        
    }
    render(){
        return (
            <button className="button--set" disabled={this.state.buttonDisabled}
                onClick={this.handleClick }
            >&#10004;</button>                        
        )
    }
}
