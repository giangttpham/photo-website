import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Button } from "../button/Button";
import "../button/Button.css";

function Cards() {
  const [printCost, setPrintCost] = useState([]);
  const [paintingCost, setPaintingCost] = useState([]);

  const fetchAllCost = async () => {
    console.log("fetching data");
    const response = await fetch(
      `http://localhost:5000/api/photos/costForAllPrints`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setPrintCost(responseData);
      })
      .catch((error) => console.warn(error));

    fetch(`http://localhost:5000/api/photos/costForAllPaintings`)
      .then((response) => response.json())
      .then((responseData) => {
        setPaintingCost(responseData);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div className="cards">
      <h1> Available Photographs </h1>{" "}
      <div className="cost-button">
        <button
          className={`btn btn--outline btn--medium`}
          onClick={fetchAllCost}
        >
          DISPLAY COST
        </button>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/halongbay_vietnam.jpeg"
              text="Ha Long Bay"
              label="Vietnam"
            />
            <div>
              {printCost[0] && 
                <div className="cost">
                  <p>${printCost[0]} / print</p>
                </div>
              }
             {paintingCost[0] && 
                <div className="cost">
                  <p>${paintingCost[0]} / painting</p>
                </div>
              }
            </div>            
          </ul>{" "}
          <ul className="cards__items">
            <CardItem
              src="images/kandy_srilanka.jpeg"
              text="Kandy"
              label="Sri Lanka"
            />
            <div>
            {printCost[1] && 
              <div className="cost">
                <p>${printCost[1]} / print</p>
              </div>
            }
             {paintingCost[1] && 
                <div className="cost">
                  <p>${paintingCost[1]} / painting</p>
                </div>
              }
            </div>
          </ul>{" "}
          <ul className="cards__items">
            <CardItem
              src="images/grandcanyon_us.jpeg"
              text="Grand Canyon"
              label="U.S.A"
            />
            <div>
              {printCost[2] && 
                <div className="cost">
                  <p>${printCost[2]} / print</p>
                </div>
              }
              {paintingCost[2] && 
                <div className="cost">
                  <p>${paintingCost[2]} / painting</p>
                </div>
              }
            </div>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cards;
