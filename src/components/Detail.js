import React from "react";
import propTypes from 'prop-types';

function Detail(props) {

    return (
        <div id="detailComponent">
            -------
            <br />
            Price: {props.price}
            <br />
            Stock: {props.stock}
            <br />
            Caffeine: {props.caffeine}
            <br />
            <button onClick = {() => props.setHidden(props.id)}>Hide Details</button>
            <br />
        </div>
    );
}

Detail.propTypes = {
    price: propTypes.number,
    stock: propTypes.number,
    caffeine: propTypes.string,
    setHidden: propTypes.func
}

export default Detail;