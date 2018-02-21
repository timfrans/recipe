import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Recipe} from './recipe';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipesArray: [],
            recipeList: null,
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createList = this.createList.bind(this);
    }

    createRecipe(name){
        var arr = this.state.recipesArray;
        var recipeObj = <Recipe name={name}/>
        arr.push(recipeObj);
        this.setState({
            recipesArray: arr
        });

        this.createList();
    }

    createList(){
        const listItems = this.state.recipesArray.map((item)=>{
            return <li>{item}</li>
        });
        this.setState({
            recipeList: <ul>{listItems}</ul>
        });
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        });
        //console.log(this.state.name);
    }

    handleClick(){
        this.createRecipe(this.state.name);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Create New</button>
                {this.state.recipeList}
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);