import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../Layout/UI/Button/Button';
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.Price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;
