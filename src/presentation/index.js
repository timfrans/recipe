import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ContainerRecipe} from '../containerRecipe';

export function Index(props) {
    const recipes = props.recipesArray.map((item, index)=>{
        return <li key={index}><ContainerRecipe name={item} id={index} deleteRecipe={props.deleteRecipe}/></li>
    });

    return (
        <div>
            <input type="text" onChange={props.handleChange}/>
            <button onClick={props.handleClick}>Create New</button>
            <ul>
                {recipes}
            </ul>
        </div>
    );
}