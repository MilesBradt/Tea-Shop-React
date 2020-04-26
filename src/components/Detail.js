import React from "react";
import propTypes from 'prop-types';

function Detail(props) {
    return (
        <div id="detailComponent">
            <p>Detail Component Price: {props.price}</p>
        </div>
    );
}

Detail.propTypes = {
    price: propTypes.number
}

export default Detail;