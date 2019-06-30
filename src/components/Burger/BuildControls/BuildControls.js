import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label:'Cheese', type:'cheese'},
    { label:'Meat', type:'meat'},
    { label:'Bacon', type:'bacon'},
    { label:'Salad', type:'salad'},
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price control: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label}
                added = {() =>props.ingredientAdder(ctrl.type)}
                removed = {() =>props.ingredientRemove(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} />
        ))}
        <button className = {classes.OrderButton}
                disabled = {!props.purchasable}
                onClick = {props.ordered}>Order Now!</button>
    </div>
)

export default BuildControls