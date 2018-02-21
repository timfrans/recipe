import React, { Component } from 'react';
import {Ingredient} from './ingredient';

export class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientArray: [],
            isFormActive: false,
            ingredient: ''
        };

        this.toggleInput = this.toggleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        const item = <Ingredient name={this.state.ingredient}/>
        arr.push(item);
        this.setState({
            ingredientArray: arr
        });
    }

    render() {
        let form = null;
        if(this.state.isFormActive == true){
            form = (
                <div>
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Add</button>
                </div>
            );
        }
        else{
            form = null;
        }

        const ingredients = this.state.ingredientArray.map((item)=>{
            return <li>{item} <button>Delete</button></li>;
        })

        return (
            <div>
                <a href="#" onClick={this.toggleInput}>{this.props.name}</a>
                <div>
                    {form}
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
        )
    }
}