import React from 'react';

const Cart = (props) => {
    const cart = props.country;
    const totalPopulation = cart.reduce((accomulate,country)=> accomulate+country.population,0)
    return (
        <div>
            <h3>Length:{cart.length}</h3>
            <p>Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;