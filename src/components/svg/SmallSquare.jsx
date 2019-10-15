import React from "react";

class SmallSquare extends React.Component {
  render() {
    const style = {
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 3
    };

    return (
      <rect
        name={this.props.key + "_456"}
        x={this.props.x + 10}
        y={-this.props.canvasHeight + this.props.y + 10}
        width={100}
        height={100}
        style={style}
      />
    );
  }
}

export default SmallSquare;
