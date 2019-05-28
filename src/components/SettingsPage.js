import React from 'react';
import {connect} from 'react-redux';
import WeightForm from './WeightForm';
import {startEditWeights, startResetWeights} from '../actions/exercises';
import {openModal, closeModal} from '../actions/modal';
import Portal from './Portal';
import Modal from './Modal';

export class SettingPage extends React.Component{
    onSubmit = (exercises) => {
        this.props.startEditWeights(exercises);
        this.props.history.push('/');
    }
    onConfirmation = () => {
        this.props.startResetWeights()
        this.props.closeModal()
        this.props.history.push('/');
    }
    onReset = () => {
        this.props.openModal({
            modalType: 'CONFIRMATION',
            modalProps: {
                onClose: this.props.closeModal,
                onConfirmation: this.onConfirmation,
                content: "This action will wipe all your data. Are you sure you want to proceed?"
            }
        })
        
    }
    render() {
        return (
            <div className='page-header'>
                <div className='content-container'>
                    <WeightForm 
                    exercises={this.props.exercises}
                    onSubmit={this.onSubmit}
                    onReset={this.onReset}
                    />
                </div>
                <Portal>
                    <Modal />    
                </Portal>              
            </div>            
        )
    }
}    

const mapDispatchToProps = (dispatch) => ({
    startEditWeights: (weight) => dispatch(startEditWeights(weight)),
    startResetWeights: ()=> dispatch(startResetWeights()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: (modal) => dispatch(closeModal(modal))
})

const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
        modal: state.modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)