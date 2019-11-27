import React from 'react';

export default class Counter extends React.Component {
    constructor(){
        super()
        this.state = {seconds: 90}
    }

    componentDidMount(){
        this.mounted = true;
        this.interval = setInterval(() => {
            this.mounted ? 
                this.count() : null
        }, 1000)
    }
    componentWillUnmount(){
        this.mounted = false
    }
    count(){
        if(this.state.seconds < 1){            
            clearInterval(this.interval)
            this.props.onClose()       
        } else {            
            this.setState({seconds: this.state.seconds - 1})
        }
    }
    render(){
        return (
            <div className="modal--container">
                <div className="modal--window">
                    <div>
                        Rest timer: {this.state.seconds} s
                    </div>
                    <button className="button" onClick={this.props.onClose}>
                        Skip
                    </button>
                </div>                
            </div>
                     
        )
    }
}