import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHanlder = () => {
    setIsCheckout(true);
  }

  const submitOrderHanlder = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-course-3d084-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        items: cartCtx.items
      })
    });

    setDidSubmit(true)
    setIsSubmitting(false)
    cartCtx.clearCart();
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHanlder}>Order</button>}
  </div>

  const cartModalContent = <>{cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHanlder} onCancel={props.onClose} />}
    {!isCheckout && modalActions}</>

  const isSubmittingModalContent = <p> Sending order Data</p>

  const didSubmitModalContent = <>
    <p>Succesfully sent order!</p>
    <div className={classes.actions}>
      <button className={classes['button']} onClick={props.onClose}>
        Close
      </button>
    </div>
  </>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
