import React from "react";
import propTypes from 'prop-types';

function Detail(props) {
    if(props.isVisible === true) {
        return (
            <div id="detailComponent">
                -------
                <br/>
                Price: {props.price}
                <br/>
                Stock: {props.stock}
                <br/>
                Caffeine: {props.caffeine}
            </div> 
        );
    } else {
        return (
            <div>
                <p>not working :(</p>
            </div>
        );
    }
}

Detail.propTypes = {
    price: propTypes.number,
    stock: propTypes.number,
    caffeine: propTypes.string,
    isVisible: propTypes.bool
}

export default Detail;