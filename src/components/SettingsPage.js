import React from 'react';
import {connect} from 'react-redux';
import WeightForm from './WeightForm';
import {startEditWeights, startResetWeights} from '../actions/exercises';
import {startProgressReset} from '../actions/progress';
import {openModal, closeModal} from '../actions/modal';
import Portal from './Portal';
import Modal from './Modal';
import Page from './Page';

export class SettingPage extends React.Component{
	onSubmit = (exercises) => {        
		const update = exercises
		update.session = this.props.session ? this.props.session : 1
		this.props.startEditWeights(update);
		this.props.history.push('/');
	}
	onConfirmation = () => {
		this.props.startResetWeights()
		this.props.startProgressReset()
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
			<Page className='page__settings'>
					<div className='setting-page__instructions'>
						Enter weights for each exercise.
						Most people start with 50% of maximum load for 5 reps.
					</div>
					<WeightForm 
						exercises={this.props.exercises.exercises}
						onSubmit={this.onSubmit}
						onReset={this.onReset}
					/>
				<Portal>
					<Modal />    
				</Portal> 
			</Page>          
		)
	}
}    

const mapDispatchToProps = (dispatch) => ({
	startEditWeights: (weight) => dispatch(startEditWeights(weight)),
	startResetWeights: () => dispatch(startResetWeights()),
	startProgressReset: () => dispatch(startProgressReset()),
	openModal: (modal) => dispatch(openModal(modal)),
	closeModal: (modal) => dispatch(closeModal(modal))
})

const mapStateToProps = (state) => {
	return {
		exercises: state.exercises,
		session: state.session,
		modal: state.modal
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)