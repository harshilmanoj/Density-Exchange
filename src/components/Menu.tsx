import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import "./styles.css"

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Worth with <span className="text-accent">Us</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>


      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
          <img className = "mainPhoto" src = "./grid__3.png" width={1000}
            height={1000}></img>
      </div>
    </div>
  );
};

export default Menu;
