import React, { Component } from 'react'

import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
    meat: 1.5,
    cheese: 0.5,
    salad: 0.4,
    bacon: 0.6,
}

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state
    // }

    state = {
        ingredients: {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatePurchasableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({purchasable: sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount
        const priceAddition = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchasableState(updateIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount
        const priceDeduction = INGREDIENTS_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchasableState(updateIngredients)
    }

    purchaseHandler = () => {
        this.setState({purchasing : true})
    }

    purchaseCloseHandler = () => {
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = () => {
        alert('You continue!!!')
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        }

        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal show = {this.state.purchasing} moduleClose = {this.purchaseCloseHandler}>
                    <OrderSummary 
                    ingredients = {this.state.ingredients}
                    purchaseContinue = {this.purchaseContinueHandler}
                    purchaseCancelled = {this.purchaseCloseHandler}
                    price = {this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdder = {this.addIngredientHandler}
                ingredientRemove = {this.removeIngredientHandler}
                disabled = {disableInfo}
                purchasable = {this.state.purchasable}
                price = {this.state.totalPrice}
                ordered = {this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder