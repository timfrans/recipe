import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Index} from './presentation/index';
import {ContainerRecipe} from './containerRecipe';

class ContainerIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipesArray: [],
            name: '',
            indexIsSelected: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    createRecipe(name){
        var arr = this.state.recipesArray;
        arr.push(name);
        this.setState({
            recipesArray: arr
        });
    }

    deleteRecipe(index){
        var arr = this.state.recipesArray;
        arr.splice(index, 1);
        this.setState({
            recipesArray: arr
        });
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleClick(){
        this.createRecipe(this.state.name);
    }



    render(){
        return <Index 
            indexIsSelected={this.state.indexIsSelected} 
            recipesArray={this.state.recipesArray}
            deleteRecipe={this.deleteRecipe} 
            handleChange={this.handleChange} 
            handleClick={this.handleClick}/>;
    }
}

ReactDOM.render(
    <ContainerIndex />,
    document.getElementById('root')
);