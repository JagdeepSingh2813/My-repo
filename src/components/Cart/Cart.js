import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOutForm from "./CheckOutForm";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckOut, setIsCheckOut] = useState(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, quantity: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const orderhandler = () => {
        setIsCheckOut(true)
    };

    const submitOrderHandlder = async (userData) => {
        setIsCheckOut(false)
        props.onClose()
        const response= await fetch('https://food-db-e85cc-default-rtdb.firebaseio.com/orders.json', {
            method : 'POST',
            body: JSON.stringify({
                Items: cartCtx.items,
                user : userData
            }),
            headers : {
                'Content-Type' :'application/json'
            }
        })
        const data=await response.json();
        console.log(data)
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );


    return (
        <Modal onClose={props.onClose} className={classes['cart-model']}>
            {cartItems}      

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {!isCheckOut && <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button onClick={orderhandler} className={classes.button}>Order</button>}
            </div>}
            <div>
                {isCheckOut && <CheckOutForm onCancel={props.onClose} onConfirm={submitOrderHandlder} />}
            </div>

        </Modal>
    );
};

export default Cart;
