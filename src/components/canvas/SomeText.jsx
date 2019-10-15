import React from "react";
import { Shape } from "react-konva";

class SomeText extends React.Component {
  drawScene = (context, shape) => {
    context.beginPath();
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("Some Text", this.props.x, this.props.y);
    context.stroke();
    context.closePath();
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  };
  render() {
    return (
      <Shape
        name={this.props.key + "_123"}
        x={0}
        y={0}
        sceneFunc={(context, shape) => this.drawScene(context, shape)}
      />
    );
  }
}

export default SomeText;
