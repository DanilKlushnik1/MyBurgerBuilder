import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class orderSummary extends Component {
    componentWillUpdate(){
        console.log('[orderSummary] WillUpdate ')
    }

    ingredientsSummary = Object.keys( this.props.ingredients ).map(igKey => {
        return (<li>
                    <span stele = {{textTransform : 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>)
    })

    render () {
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {this.ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>COntinue to check out?</p>
                <Button btnType = "Success" clicked = {this.props.purchaseContinue}>Continue</Button>
                <Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>Cancel</Button>
            </Aux>
        )
    }
}  

export default orderSummary