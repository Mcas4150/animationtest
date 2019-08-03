import React, { Component } from "react";
import { font, color } from "../shared/style";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, globalId: "", counter: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    let globalId = window.setTimeout(this.updateCanvas, 100);
    // let globalId = window.requestAnimationFrame(this.updateCanvas);
    this.setState({
      globalId: globalId
    });
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.globalId);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateCanvas() {
    let ctx = this.refs.canvas.getContext("2d");
    var time = new Date();
    let width = this.refs.canvas.width;
    let height = this.refs.canvas.height;

    let centerX = width / 2;
    let centerY = height / 2;
    let sineCounter = Math.abs(Math.sin(this.state.counter / 100));

    const orbit = {
      draw: function(radius) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * sineCounter, 0, Math.PI * 2, false); // Earth orbit
        ctx.fillStyle = color.skyblue;
        ctx.stroke();
      },
      rotate: function() {}
    };

    const circle = {
      draw: function(x, y, radius, color) {
        ctx.translate(
          x * sineCounter * sineCounter,
          y * sineCounter * sineCounter
        );
        ctx.beginPath();
        ctx.arc(
          20,
          20,
          radius * sineCounter * sineCounter * sineCounter,
          0,
          Math.PI * 2,
          true
        );
        ctx.fillStyle = color;
        ctx.stroke();
        ctx.fill();
      }
    };

    const line = {
      draw: function(x, y) {
        ctx.restore();
        ctx.moveTo(centerX, centerY);
        // ctx.lineTo(x, y);
        ctx.lineTo(
          centerX + x * sineCounter * sineCounter,
          centerY + y * sineCounter * sineCounter
        );
        ctx.strokeStyle = "turqoise";
        ctx.stroke();
      }
    };

    // ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 2000, 2000);

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = color.darkgrey;
    ctx.save();

    ctx.translate(centerX, centerY);

    // orbit 1
    ctx.rotate(
      (((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()) *
        sineCounter
    );

    circle.draw(50, 0, 8, color.skyblue);
    circle.draw(60, -height / 12, 15, color.white);
    circle.draw(60, height / 12, 15, color.white);
    circle.draw(40, -height / 10, 15, color.skyblue);
    // ctx.restore();
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 80);
    ctx.rotate(
      (((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()) *
        sineCounter
    );

    ctx.restore();

    window.setTimeout(orbit.draw(70), 300);
    window.setTimeout(orbit.draw(135 * sineCounter), 800);
    window.setTimeout(
      orbit.draw((height / 4) * sineCounter * sineCounter),
      1000
    );
    window.setTimeout(orbit.draw(255 * sineCounter * sineCounter), 3000);

    line.draw(-width / 4, -height / 3);
    line.draw(width / 4, -height / 3);
    line.draw(-width / 2.75, 0);
    line.draw(width / 2.75, 0);
    line.draw(width / 4, height / 3);
    line.draw(-width / 4, height / 3);

    let newCount = this.state.counter < 150 ? this.state.counter + 1 : 0;

    let globalId = null;
    this.setState({ counter: newCount });
    if (this.state.counter < 150) {
      globalId = window.requestAnimationFrame(this.updateCanvas);
    } else {
      globalId = null;
    }

    this.setState({ globalId: globalId });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <canvas
        id="canvas"
        className="canvas"
        ref="canvas"
        width={window.innerWidth * 0.68}
        height={window.innerHeight}
        style={{ position: "fixed", zIndex: "2" }}
      />
    );
  }
}
