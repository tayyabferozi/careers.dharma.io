import React from "react";

import "./Hero.css"
import bitcoin from "../../media/bitcoin.png"
import ethereum from "../../media/ethereum.png"
import logo from "../../media/logo.svg"

const Hero = () => {
  return (
    <div className="Hero">
      <img src={logo} alt="logo" className="Logo" />
      <h1>
        <img src={bitcoin} alt="bitcoin" className="Bitcoin" />
        MAKE MONEY MAGICAL AT DHARMA
      <img src={ethereum} alt="ethereum" className="Ethereum" />
      </h1>
      <p>
        Digital money unlocks the opportunity to build financial services that hold a candle to the modern web, and we're obsessively committed on wrenching that future into today's reality. Are you up for the challenge?
      </p>
      <button>
        View Open Roles
      </button>
    </div>);
};

export default Hero;