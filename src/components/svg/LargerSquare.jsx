import React from "react";

class LargeSquare extends React.Component {
  render() {
    const style = {
      fill: "red",
      stroke: "black",
      strokeWidth: 3
    };
    return (
      <rect
        name={this.props.key + "_789"}
        x={this.props.x}
        y={-this.props.canvasHeight + this.props.y}
        width={1000}
        height={1000}
        style={style}
      />
    );
  }
}

export default LargeSquare;
