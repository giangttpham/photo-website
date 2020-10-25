import React from "react";
import "../../App.css";
import { Button } from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/maldive_waves.mp4" autoPlay loop muted />
      <h1>Travel Through Pictures</h1>
      <p>Let us bring the world to you</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="products"
        >
          SELECT PHOTOS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
