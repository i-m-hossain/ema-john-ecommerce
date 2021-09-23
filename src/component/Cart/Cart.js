import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let sumPrice=0;
    let sumShipping=0;
    for(const product of cart){
        sumPrice += product.price
        sumShipping += product.shipping
    }
    const beforeTax = (sumPrice + sumShipping).toFixed(2);
    const tax = ((sumPrice + sumShipping)*.2).toFixed(2);
    const grandTotal = (sumPrice + sumShipping + ((sumPrice + sumShipping) * .2)).toFixed(2)
    return (
        <div className="summary">
            <h2 className="summary-title">Order Summary</h2>
            <p className="items-orderd">Items ordered: {props.cart.length}</p>
            <table >
                <tbody>
                    <tr>
                        <td>Total:</td>
                        <td className='amount'>${sumPrice}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td className='amount'>${sumShipping}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td className='amount'>${beforeTax}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td className='amount'>${tax}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Order total:</td>
                        <td className="font-bold amount">${grandTotal}</td>
                    </tr>
                </tbody>
            </table>
            
            <button className="btn-warning">Review your order</button>

        </div>
    );
};

export default Cart;