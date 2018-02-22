import React from 'react';
import {ContainerIngredient} from '../containerIngredient';

export function Recipe(props){
    let form = null;
    if(props.isFormActive === true){
        form = (
            <div>
                <input type="text" onChange={props.handleChange}/>
                <button onClick={props.handleClick}>Add</button>
            </div>
        );
    }
    else{
        form = null;
    }

    

    /*const ingredients = props.ingredientArray.map((item, index)=>{
        return <li key={index}><ContainerIngredient name={item} removeIngredient={props.removeIngredient} id={index}/></li>;
    })*/

    /*return (
        <div>
            <a onClick={props.toggleInput}>{props.name}</a><button onClick={props.handleClickDelete}>Delete</button>
            <div>
                {form}
                <ul>
                    {ingredients}
                </ul>
            </div>
        </div>
    )*/

    return (
        <div>
            <a>{props.name}</a><button onClick={props.handleClickDelete}>Delete</button>
        </div>
    );
}