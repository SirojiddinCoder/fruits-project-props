import React from "react";
import './Fruit.css';

function Fruit(){
    return(
        <div className="main">
            <div className="rasm">

            </div>
            <div className="details">
                <div className="top">
                    <h1>Celery Stakl</h1>
                    <button className="button">ADD</button>
                </div>
                <div className="bottom">
                    <div className="data">
                        <p className="title">UOM</p>
                        <p className="value">02</p>
                    </div>
                    <div className="data">
                    <p className="title">Pack Size</p>
                        <p className="value">02</p>
                    </div>
                    <div className="data">
                    <p className="title">Per Unit</p>
                        <p className="value">02</p>
                    </div>
                    <div className="data">
                    <p className="title">Total</p>
                        <p className="value">02</p>
                    </div>
                </div>


            </div>
         

        </div>
    )
}

export default Fruit;