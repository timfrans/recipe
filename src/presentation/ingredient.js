import React from 'react';

export function Ingredient(props){
    return (
        <div>{props.name} <button onClick={props.deleteIngredient}>Delete</button></div>
    )
}