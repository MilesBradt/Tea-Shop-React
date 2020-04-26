import React from "react";
import propTypes from 'prop-types';

function Home(props) {
    return (
        <div id="homeComponent">
            <p>Home is working</p>
            {props.inventory.map((item, index) =>
                <p key={index}>
                    {item.name}
                </p>
            )}
        </div>
    );
}

Home.propTypes = {
    inventory: propTypes.array
}


export default Home;