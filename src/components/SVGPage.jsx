import React from "react";
import { Link } from "react-router-dom";
import SomeText from "./svg/SomeText";
import SmallSquare from "./svg/SmallSquare";
import LargerSquare from "./svg/LargerSquare";

class SVGPage extends React.Component {
  render() {
    const canvasHeight = 4000;
    const canvasWidth = 4000;

    const viewBox = [
      1,
      -1 * canvasHeight,
      canvasWidth,
      canvasHeight
    ];

    return (
      <div className="App">
        <Link to="/">Back</Link>
        <h2>You are on the SVG Page</h2>

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
                    <svg
                      id="graph-svg"
                      width={canvasWidth}
                      height={canvasHeight}
                      preserveAspectRatio="xMinYMin meet"
                      viewBox={viewBox}
                      style={{ backgroundColor: "white" }}
                    >
                      <SomeText
                        name="st1"
                        x={500}
                        y={50}
                        canvasHeight={canvasHeight}
                      />
                      <SomeText
                        name="st2"
                        x={500}
                        y={100}
                        canvasHeight={canvasHeight}
                      />
                      <SomeText
                        name="st3"
                        x={500}
                        y={150}
                        canvasHeight={canvasHeight}
                      />
                      <SomeText
                        name="st4"
                        x={500}
                        y={200}
                        canvasHeight={canvasHeight}
                      />
                      <SomeText
                        name="st5"
                        x={500}
                        y={250}
                        canvasHeight={canvasHeight}
                      />
                      <LargerSquare
                        name="ls1"
                        x={100}
                        y={400}
                        canvasHeight={canvasHeight}
                      />
                      <LargerSquare
                        name="ls2"
                        x={1000}
                        y={1000}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss1"
                        x={0}
                        y={0}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss2"
                        x={111}
                        y={111}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss3"
                        x={222}
                        y={222}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss4"
                        x={333}
                        y={333}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss5"
                        x={444}
                        y={444}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss6"
                        x={555}
                        y={555}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss7"
                        x={666}
                        y={666}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss8"
                        x={777}
                        y={777}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss9"
                        x={888}
                        y={888}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss10"
                        x={999}
                        y={999}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss11"
                        x={1111}
                        y={1111}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss12"
                        x={2222}
                        y={2222}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss13"
                        x={3333}
                        y={3333}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss14"
                        x={4444}
                        y={4444}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss15"
                        x={5555}
                        y={5555}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss16"
                        x={6666}
                        y={6666}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss17"
                        x={7777}
                        y={7777}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss18"
                        x={8888}
                        y={8888}
                        canvasHeight={canvasHeight}
                      />
                      <SmallSquare
                        name="ss19"
                        x={9999}
                        y={9999}
                        canvasHeight={canvasHeight}
                      />
                    </svg>
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

export default SVGPage;
