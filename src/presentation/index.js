import React from 'react';
import {ContainerRecipe} from '../containerRecipe';

export function Index(props) {
    const recipes = props.recipesArray.map((item, index)=>{
        return <li key={index}><ContainerRecipe name={item} id={index} deleteRecipe={props.deleteRecipe}/></li>
    });

    if(props.indexIsSelected){
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
    else{
        return <h1>leeg</h1>;
    }
}