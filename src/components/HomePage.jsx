import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Canvas vs SVG</h1>
        <h2>Same shapes, 2 difference methodologies to render them</h2>
        <br />
        <Link to="/svg">SVG</Link>
        <br />
        <br />
        <Link to="/canvas">Canvas</Link>
      </div>
    );
  }
}

export default Homepage;
