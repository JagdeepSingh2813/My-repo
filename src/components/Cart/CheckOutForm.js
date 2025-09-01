import React, { useRef, useState } from "react";
import classes from './CheckOutForm.module.css'


const CheckOutForm = ({onCancel, onConfirm}) => {
    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const pinCoderef = useRef();

    const[isPinValid, setIsPinValid]=useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredPinCode = pinCoderef.current.value;

        if(enteredPinCode.trim().length !==6){
            setIsPinValid(false)
            return ;
        }

        setIsPinValid(true);

        const userData = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            pinCode: pinCoderef.current.value,
        };
       
       
        console.log("form submitted:", userData)
        alert('Form submitted')
        
        onConfirm(userData);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div>
                <label>Your Name</label>
                <input type="text" ref={nameRef} required />
            </div>
            <div>
                <label>Address</label>
                <input type="text" ref={addressRef} required />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" ref={phoneRef} required />
            </div>
            <div>
                <label>Pin Code</label>
                <input type="text" ref={pinCoderef} required />
                {!isPinValid && <p className={classes.error}>Pin Code must be exaclty 6 digits.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={onCancel}> Cancel </button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    )
}

export default CheckOutForm;