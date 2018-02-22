import React, { Component } from 'react';
import {Recipe} from './presentation/recipe'

export class ContainerRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
            ingredientArray: [],
            isFormActive: false,
            ingredient: ''
        };

        this.toggleInput = this.toggleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    toggleInput(){
        this.setState(prevState => ({
            isFormActive: !prevState.isFormActive
        }));
    }

    handleChange(e){
        this.setState({
            ingredient: e.target.value
        });
    }

    handleClick(){
        var arr = this.state.ingredientArray;
        arr.push(this.state.ingredient);
        this.setState({
            ingredientArray: arr
        });
    }

    handleClickDelete(){
        this.props.deleteRecipe(this.state.id);
    }

    removeIngredient(index){
        var arr = this.state.ingredientArray;
        arr.splice(index, 1);
        this.setState({
            ingredientArray: arr
        });
    }

    render(){
        return <Recipe 
            name={this.state.name} 
            id={this.state.id}
            ingredientArray={this.state.ingredientArray}
            isFormActive={this.state.isFormActive} 
            toggleInput={this.toggleInput} 
            handleChange={this.handleChange} 
            handleClick={this.handleClick} 
            removeIngredient={this.removeIngredient} 
            handleClickDelete={this.handleClickDelete}
        />;
    }
}