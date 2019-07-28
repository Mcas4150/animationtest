import React, { Component } from "react";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    // window.setInterval(this.updateCanvas, "100");
    this.initCanvas();
  }

  componentDidUpdate() {
    // this.updateCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  initCanvas() {
    sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
    moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
    earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
    window.requestAnimationFrame(this.updateCanvas);
  }

  updateCanvas() {
    let ctx = this.refs.canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 700, 700); // clear canvas

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(150, 150, 155, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(150, 150, 200, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(this.updateCanvas);
    // const height = window.innerHeight;

    // ctx.fillRect(0, 0, 100, 1000);
    // ctx.moveTo(0, 0);
    // ctx.lineTo(height / 2, 0);
    // ctx.lineTo(height / 10, height / 10);
    // ctx.lineTo(height / 10, height - height / 10);
    // ctx.lineTo(height / 2, height);
    // ctx.lineTo(0, height);
    // ctx.lineTo(0, 0);
    // ctx.fillStyle = "black";
    // ctx.fill();
  }

  // unmountCanvas(){
  //   ctx =
  // }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { active } = this.props;
    return (
      <canvas
            className="canvas"
            ref="canvas"
            width={window.innerHeight / 2}
            height={window.innerHeight}
            style={{ position: "fixed", zIndex: "2" }}
          />
      // <div>

      //   {active ? (
      //     <canvas
      //       className="canvas"
      //       ref="canvas"
      //       width={window.innerHeight / 2}
      //       height={window.innerHeight}
      //       style={{ position: "fixed", zIndex: "2" }}
      //     />
      //   ) : (
      //     <canvas/>
      //   )}
      // </div>
    );
  }
}

const sun = new Image();
const moon = new Image();
const earth = new Image();
