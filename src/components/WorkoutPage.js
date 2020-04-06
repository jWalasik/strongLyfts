import React from 'react';
import Exercise from './Exercise';
import Portal from './Portal';
import Modal from './Modal';
import {connect} from 'react-redux';
import {startAddWeights} from '../actions/exercises';
import {openModal, closeModal} from '../actions/modal';
import {Redirect} from 'react-router-dom';

export class WorkoutPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            day: this.props.session % 2 === 0 ? 'B' : 'A',
            modal: props.modal,
        }
    }
    onConfirmation = () => {
        console.log(this.state)
        this.props.startAddWeights(this.props.exercises, this.state);
        this.props.closeModal()
        this.props.history.push('/');
    }
    onClose = () => {
        this.props.closeModal()
    }
    completeSet = (id) => {
        const idx = `${id}-progress`
        this.setState({[idx]: this.state[idx]-1})
    }
    handleClick = () => {
        this.props.openModal({
            modalType: 'CONFIRMATION',
            modalProps: {
                onClose: this.onClose,
                onConfirmation: this.onConfirmation,
                content: 'Finish your workout?'
            }
        }) 
    }
    render() {
        if(this.props.exercises.length < 5) {
            return <Redirect to='/settings' />
        }

        return (
            <div className='page-header'>
                <div className='content-container'>
                    <h1>Session {this.props.session}</h1>
                    {this.props.exercises.map((exercise) => {                           
                        if(exercise.day !== this.state.day){
                            const key = `${exercise.id}-progress`
                            if(this.state[key]===undefined){
                                this.state[key] = exercise.id==='Deadlift' ? 1 : 5 
                            }
                            
                            return <Exercise className='exercise-item' key={exercise.id}{...exercise} completeSet={this.completeSet}/>
                        }                            
                    })
                    }
                    <button className='button button--finish' onClick={this.handleClick}>
                    Finish Workout
                    </button>
                </div>
                <Portal>
                    <Modal/>
                </Portal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddWeights: (exercises, day) => dispatch(startAddWeights(exercises, day)),
    closeModal: (modal) => dispatch(closeModal(modal)),
    openModal: (modal) => dispatch(openModal(modal))
})

const mapStateToProps = (state) => {
    return {
        session: state.exercises.session,
        exercises: state.exercises.exercises,
        modal: state.modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);