import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const { onConfirm } = props;
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event) => {
        console.log('confirm handler')
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = cityInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        console.log(enteredPostal)
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveChars(enteredPostal);
        console.log(enteredPostalIsValid)
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        console.log(formInputValidity)

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;



        if (!formIsValid) {

            return;
        }

        onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        });
    };



    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid Name</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid Street</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.postal && <p>Please enter a valid Postal Code</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid City</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;