import React from "react";
import Detail from "./Detail";
import propTypes from 'prop-types';

function Home(props) {
    return (
        <div id="homeComponent">
            <h1>Green Tea</h1>
            {props.greenTea.map((item, index) =>
            <div key={index}>
                Name: {item.name}
                <br />
                <Detail 
                    price = {item.price}
                    stock = {item.stock}
                    caffeine = {item.caffeine}
                />
                <br/>
            </div>
            )}
            <br/>
            <h1>Black Tea</h1>
            {props.blackTea.map((item, index) =>
            <div key={index}>
                Name: {item.name}
                <br />
                <Detail 
                    price = {item.price}
                    stock = {item.stock}
                    caffeine = {item.caffeine}
                />
                <br/>
            </div>
            )}
            <br/>
            <h1>Oolong Tea</h1>
            {props.oolongTea.map((item, index) =>
            <div key={index}>
                Name: {item.name}
                <br />
                <Detail 
                    price = {item.price}
                    stock = {item.stock}
                    caffeine = {item.caffeine}
                />
                <br/>
            </div>
            )}
            <br/>
            <h1>Herbal Tea</h1>
            {props.herbalTea.map((item, index) =>
            <div key={index}>
                Name: {item.name}
                <br />
                <Detail 
                    price = {item.price}
                    stock = {item.stock}
                    caffeine = {item.caffeine}
                />
                <br/>
            </div>
            )}
        </div>
    );
}

Home.propTypes = {
    inventory: propTypes.array,
    greenTea: propTypes.array,
    blackTea: propTypes.array,
    oolongTea: propTypes.array,
    herbalTea: propTypes.array,
    isVisible: propTypes.bool
}

export default Home;