import React, { Component } from "react";
import "./App.css";
import { BootstrapCarousel } from "./BootstrapCarousel";
import { Tiles } from "./Tile";
export class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-background full-width">
          <h1 className="title-text"></h1>

          <div className="downArrow bounce">          <div className="">
<h3>Scroll</h3></div>
          <svg id="downArrow">

<polygon  points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " style={{ fill:"#ca9544",stroke:"#ca9544" }}/>
</svg>

</div>
        </div>
        <BootstrapCarousel></BootstrapCarousel>
        <Tiles></Tiles>
      </div>
    );
  }
}
export default Home;
