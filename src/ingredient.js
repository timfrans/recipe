import React from 'react';

export class Ingredient extends React.Component {
    render(){
        return (
            <div>{this.props.name}</div>
        )
    }
}