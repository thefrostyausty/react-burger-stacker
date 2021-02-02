import React, { Component } from 'react'

class Ingredient extends Component {

    render() {
        return (
            <li style={{backgroundColor: this.props.ingredient.color}}>{this.props.ingredient.name}</li>
        )
    }
}

export default Ingredient