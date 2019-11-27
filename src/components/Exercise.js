import React from 'react';
import Button from './Button'
import { connect } from 'react-redux';
import { closeModal, openModal } from '../actions/modal';

export class Exercise extends React.Component {
    state={
        focused: false,
        progress: 0
    }
    handleClick = () => {
        this.props.openModal({
            modalType: 'COUNTER',
            modalProps: {
                onClose: this.props.closeModal
            }
        })
        this.state.progress ++
    }
    onClose = () => {        
        this.props.closeModal()
    }
    //show details
    onFocus = () => {
        this.setState({focused: !this.state.focused})
    }

    render(){
        //store buttons in a container
        let buttons = []
        for (let i=0; i<this.props.sets; i++){
            buttons.push(<Button key={i} handleClick={this.handleClick} />)
        }
       
        return (
            <div className="content-container">
                <div className="exercise" onClick={this.onFocus}>
                    <h2>
                        {this.props.id}                        
                    </h2>
                    <input 
                        id={this.props.id}
                        type="checkbox" 
                        disabled={true}
                        checked={this.state.progress>=this.props.sets}
                    >
                    </input>
                    <label 
                        className="exercise exercise--checkbox" 
                        htmlFor={this.props.id}>
                    </label>                   
                </div>
                {this.state.focused && 
                <div className="exercise exercise--details">
                    <h3 className="exercise exercise--header">
                        <span>Sets: {this.props.sets} x 5</span>
                        <span>Load: {this.props.load} kg</span>
                    </h3>
                    <div className="exercise exercise--buttons">
                        {buttons}
                    </div>
                </div>
                }      
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: (modal) => dispatch(closeModal(modal))
})
    

const mapStateToProps = (state) =>{
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);