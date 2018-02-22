import React, { Component } from 'react';
import {Ingredient} from './presentation/ingredient';

export class ContainerIngredient extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            id: this. props.id
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.removeIngredient();
    }

    render(){
        return <Ingredient name={this.state.name} id={this.state.id} deleteIngredient={this.handleClick}/>
    }
}