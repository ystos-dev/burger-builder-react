import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    console.log(props.ingredients);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+ i} type={igKey} />;
            })
        })
        .reduce((prev, curr) => {
            return prev.concat(curr);
        }, []);
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;