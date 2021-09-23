##ema-john Ecommerce

This is a simple e-commerce website which uses api to load products, adds to cart and shows the cart details.

This is my introductory ecommerce website using React. Firstly, I created necessary components. Then, using useEffect, useState hook and props, products were successfully added. An event listener is added to the <strong> Add to cart </strong> button. As Cart and Product are two differnt component, Cart data were retrieved from their parent component as I passed product data to the parent component as argument of the event handler. Sum calculations are performed in Cart component using a for of loop as the cart product prop is an array.

<strong>Dificulties I faced</strong>:
  <li>Getting data from different component</li>
  <li>Passing data to the parent component</li>
