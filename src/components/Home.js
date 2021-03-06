import React from "react";
import Detail from "./Detail";
import propTypes from 'prop-types';

function Home(props) {
    return (
        <div id="homeComponent">
            <h1 class="tea-type">Green Tea</h1>
            {props.greenTea.map((item, index) =>
                <div key={index}>
                    <br />
                    Name: {item.name}
                    <br />
                    {item.visible
                        ? 
                            <Detail
                                price={item.price}
                                stock={item.stock}
                                caffeine={item.caffeine}
                                id={item.id}
                                setHidden={props.setHidden}
                                addStock={props.addStock}
                                subtractStock={props.subtractStock}
                            />
                        : 
                        <button onClick={() => props.setVisible(item.id)}>View Details</button>
                    }
                <br />
                </div>
            )}
            <br />
            <h1 class="tea-type">Black Tea</h1>
            {props.blackTea.map((item, index) =>
                <div key={index}>
                    <br />
                    Name: {item.name}
                    <br />
                    {item.visible
                        ? 
                            <Detail
                                price={item.price}
                                stock={item.stock}
                                caffeine={item.caffeine}
                                id={item.id}
                                setHidden={props.setHidden}
                                addStock={props.addStock}
                                subtractStock={props.subtractStock}
                            />
                        : 
                            <button onClick={() => props.setVisible(item.id)}>View Details</button>
                    }
                    <br />
                </div>
            )}
            <br />
            <h1 class="tea-type">Oolong Tea</h1>
            {props.oolongTea.map((item, index) =>
                <div key={index}>
                    <br />
                    Name: {item.name}
                    <br />
                    {item.visible
                        ? 
                            <Detail
                                price={item.price}
                                stock={item.stock}
                                caffeine={item.caffeine}
                                id={item.id}
                                setHidden={props.setHidden}
                                addStock={props.addStock}
                                subtractStock={props.subtractStock}
                            />
                        : 
                            <button onClick={() => props.setVisible(item.id)}>View Details</button>
                    }
                    <br />
                </div>
            )}
            <br />
            <h1 class="tea-type">Herbal Tea</h1>
            {props.herbalTea.map((item, index) =>
                <div key={index}>
                    <br />
                    Name: {item.name}
                    <br />
                    {item.visible
                        ? 
                            <Detail
                                price={item.price}
                                stock={item.stock}
                                caffeine={item.caffeine}
                                id={item.id}
                                setHidden={props.setHidden}
                                addStock={props.addStock}
                                subtractStock={props.subtractStock}
                            />
                        : 
                            <button onClick={() => props.setVisible(item.id)}>View Details</button>
                    }
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
    setVisible: propTypes.func,
    setHidden: propTypes.func,
    addStock: propTypes.func,
    subtractStock: propTypes.func
}

export default Home;