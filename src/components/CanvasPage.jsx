import React from "react";
import { Link } from "react-router-dom";
import { Stage, Layer } from "react-konva";
import SomeText from "./canvas/SomeText";
import SmallSquare from "./canvas/SmallSquare";
import LargerSquare from "./canvas/LargerSquare";

class CanvasPage extends React.Component {
  render() {
    const canvasHeight = 4000;
    const canvasWidth = 4000;

    return (
      <div className="App">
        <Link to="/">Back</Link>
        <h2>You are on the Canvas Page</h2>

        <div className="page-container">
          <div className="graph-container-wrapper">
            <div className="graph-container">
              <div
                style={{
                  height: "100%",
                  position: "relative",
                  backgroundColor: "#ddd"
                }}
              >
                <div
                  className="canvas-scrollbar"
                  style={{
                    height: "100%",
                    overflow: "auto",
                    backgroundColor: "#ddd"
                  }}
                >
                  <div
                    className="canvas-scrollbar"
                    style={{
                      height: "100%",
                      overflow: "auto"
                    }}
                  >
                    <Stage
                      style={{
                        backgroundColor: "white",
                        position: "inline-block"
                      }}
                      width={canvasWidth}
                      height={canvasHeight}
                    >
                      <Layer>
                        <SomeText name="st1" x={500} y={50} />
                        <SomeText name="st2" x={500} y={100} />
                        <SomeText name="st3" x={500} y={150} />
                        <SomeText name="st4" x={500} y={200} />
                        <SomeText name="st5" x={500} y={250} />
                        <LargerSquare name="ls1" x={100} y={400} />
                        <LargerSquare name="ls2" x={1000} y={1000} />
                        <SmallSquare name="ss1" x={0} y={0} />
                        <SmallSquare name="ss2" x={111} y={111} />
                        <SmallSquare name="ss3" x={222} y={222} />
                        <SmallSquare name="ss4" x={333} y={333} />
                        <SmallSquare name="ss5" x={444} y={444} />
                        <SmallSquare name="ss6" x={555} y={555} />
                        <SmallSquare name="ss7" x={666} y={666} />
                        <SmallSquare name="ss8" x={777} y={777} />
                        <SmallSquare name="ss9" x={888} y={888} />
                        <SmallSquare name="ss10" x={999} y={999} />
                        <SmallSquare name="ss11" x={1111} y={1111} />
                        <SmallSquare name="ss12" x={2222} y={2222} />
                        <SmallSquare name="ss13" x={3333} y={3333} />
                        <SmallSquare name="ss14" x={4444} y={4444} />
                        <SmallSquare name="ss15" x={5555} y={5555} />
                        <SmallSquare name="ss16" x={6666} y={6666} />
                        <SmallSquare name="ss17" x={7777} y={7777} />
                        <SmallSquare name="ss18" x={8888} y={8888} />
                        <SmallSquare name="ss19" x={9999} y={9999} />
                      </Layer>
                    </Stage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CanvasPage;
