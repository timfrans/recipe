import React, { Component } from 'react';

export class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormActive: false
        };

        this.toggleInput = this.toggleInput.bind(this);
    }

    toggleInput(){
        this.setState(prevState => ({
            isFormActive: !prevState.isFormActive
        }));
    }

    render() {
        let form = null;
        if(this.state.isFormActive == true){
            form = (
                <div>
                    <input type="text"/>
                    <button>Add</button>
                </div>
            );
        }
        else{
            form = null;
        }
        return (
            <div>
                <a href="#" onClick={this.toggleInput}>{this.props.name}</a>
                {form}
            </div>
        )
    }
}