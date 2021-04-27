import React from 'react';

export default class WeightForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            br: props.exercises[0]? props.exercises[0].load : '',
            bp: props.exercises[1]? props.exercises[1].load : '',
            dl: props.exercises[2]? props.exercises[2].load : '',
            op: props.exercises[3]? props.exercises[3].load : '',
            sq: props.exercises[4]? props.exercises[4].load : ''
        }
    }
    onBPChange = (e) => {
        const br = e.target.value;
        this.setState(() => ({br}));
    }
    onBRChange = (e) => {
        const bp = e.target.value;
        this.setState(() => ({bp}));
    }
    onDLChange = (e) => {
        const dl = e.target.value;
        this.setState(() => ({dl}));
    }
    onOPChange = (e) => {
        const op = e.target.value;
        this.setState(() => ({op}));
    }
    onSQChange = (e) => {
        const sq = e.target.value;
        this.setState(() => ({sq}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            exercises: {
                'Barbell Row': parseFloat(this.state.br),
                'Bench Press': parseFloat(this.state.bp),                
                'Deadlift': parseFloat(this.state.dl),
                'Overhead Press': parseFloat(this.state.op),
                'Squat': parseFloat(this.state.sq)
            }       
        })
        
    }
    render(){
        return (
            <form className="form" onSubmit={this.onSubmit}>              
                    <label>Barbell Row
                        <input
                            type="number" 
                            placeholder="Enter Weight"
                            value={this.state.br}
                            onChange={this.onBPChange}
                        >
                        </input>
                    </label>

                    <label>Bench Press
                        <input
                            type="number" 
                            placeholder="Enter weight"
                            value={this.state.bp}
                            onChange={this.onBRChange}
                        >
                        </input>
                    </label>
                    
                    <label>Deadlift
                        <input
                            type="number" 
                            placeholder="Enter weight"
                            value={this.state.dl}
                            onChange={this.onDLChange}
                        >
                        </input>
                    </label>           
                    
                    <label>Overhead Press
                        <input
                            type="number" 
                            placeholder="Enter weight"
                            value={this.state.op}
                            onChange={this.onOPChange}
                        >
                        </input>
                    </label>          
                    
                    <label>Squat
                        <input
                            type="number" 
                            placeholder="Enter weight"
                            value={this.state.sq}
                            onChange={this.onSQChange}
                        >
                        </input>
                    </label>
                    <button className="button">Update</button>
                    <button className="button button--reset" type="button" onClick={this.props.onReset}>Reset</button>             
            </form>
        )
    }
}