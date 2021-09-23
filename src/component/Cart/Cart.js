import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
    return (
        <div className="summary">
            <h2 className="summary-title">Order Summary</h2>
            <p className="items-orderd">Items ordered: {props.cart.length}</p>
            <table >
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td className='amount'>$579.99</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td className='amount'>$7.99</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td className='amount'>$579.99</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td className='amount'>5.3</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Order total:</td>
                        <td className="font-bold amount">$58.28</td>
                    </tr>
                </tbody>
            </table>
            
            <button className="btn-warning">Review your order</button>

        </div>
    );
};

export default Cart;