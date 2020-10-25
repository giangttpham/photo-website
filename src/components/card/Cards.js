import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Button } from "../button/Button";
import "../button/Button.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Available Photographs </h1>{" "}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/halongbay_vietnam.jpeg"
              text="Ha Long Bay"
              label="Vietnam"
            />
            <div>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PRINT
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PAINTING
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
            </div>
          </ul>{" "}
          <ul className="cards__items">
            <CardItem
              src="images/kandy_srilanka.jpeg"
              text="Kandy"
              label="Sri Lanka"
            />
            <div>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PRINT
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PAINTING
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
            </div>
          </ul>{" "}
          <ul className="cards__items">
            <CardItem
              src="images/grandcanyon_us.jpeg"
              text="Grand Canyon"
              label="U.S.A"
            />
            <div>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PRINT
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
              <ul className="cost-display">
                <div>
                  <button className={`btn btn--outline btn--medium`}>
                    GET PAINTING
                  </button>
                </div>
                <div className="cost">
                  <p>$200</p>
                </div>
              </ul>
            </div>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cards;
