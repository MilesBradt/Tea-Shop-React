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
            <button>Hide Details</button>
        </div>
    );
}

Detail.propTypes = {
    price: propTypes.number,
    stock: propTypes.number,
    caffeine: propTypes.string,
    isVisible: propTypes.bool
}

export default Detail;