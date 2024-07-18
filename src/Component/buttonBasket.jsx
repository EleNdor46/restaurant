import React from 'react';
const ButtonBasket = ({status,price}) => {
    return ( 
        <button type="button" className="btn btn-outline-secondary btn-busket">
            корзина | {status} X {price}₽
            </button>
);
}
 
export default ButtonBasket;