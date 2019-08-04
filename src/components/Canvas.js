import React, { Component } from "react";
import { color } from "../shared/style";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, OrbitId: "", LineId: "", counter1: 0, counter2: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateOrbit = this.updateOrbit.bind(this);
    this.updateLine = this.updateLine.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    // let LineId = window.setTimeout(this.updateLine, 50);
    let OrbitId = window.setTimeout(this.updateOrbit, 150);
    // let OrbitId = window.requestAnimationFrame(this.updateCanvas);
    this.setState({
      OrbitId: OrbitId
      // LineId: LineId
    });
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.OrbitId);
    // window.cancelAnimationFrame(this.state.LineId);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateLine() {
    let ctx = this.refs.canvas.getContext("2d");
    var time = new Date();
    let width = this.refs.canvas.width;
    let height = this.refs.canvas.height;

    let centerX = width / 2;
    let centerY = height / 2;
    let sineCounter = Math.abs(Math.sin(this.state.counter1 / 100));

    const line = {
      draw: function(x, y) {
        ctx.restore();
        ctx.moveTo(centerX, centerY);
        // ctx.lineTo(x, y);
        ctx.lineTo(
          centerX + x * sineCounter * sineCounter,
          centerY + y * sineCounter * sineCounter
        );
        ctx.strokeStyle = "lightskyblue";
        ctx.stroke();
      }
    };

    // ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 2000, 2000);

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = color.darkgrey;
    ctx.save();

    ctx.translate(centerX, centerY);

    ctx.restore();

    line.draw(-width / 4, -height / 3);
    line.draw(width / 4, -height / 3);
    line.draw(-width / 2.75, 0);
    line.draw(width / 2.75, 0);
    line.draw(width / 4, height / 3);
    line.draw(-width / 4, height / 3);

    let newCount = this.state.counter1 < 150 ? this.state.counter1 + 1 : 0;

    let LineId = null;
    this.setState({ counter1: newCount });
    if (this.state.counter1 < 150) {
      LineId = window.requestAnimationFrame(this.updateLine);
    } else {
      LineId = null;
    }

    this.setState({ LineId: LineId });
  }

  updateOrbit() {
    let ctx = this.refs.canvas.getContext("2d");
    var time = new Date();
    let width = this.refs.canvas.width;
    let height = this.refs.canvas.height;

    let centerX = width / 2;
    let centerY = height / 2;
    let sineCounter = Math.abs(Math.sin(this.state.counter2 / 100));

    const orbit = {
      draw: function(radius) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * sineCounter, 0, Math.PI * 2, false);
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

    // ctx.globalCompositeOperation = "source-in";

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

    circle.draw(50, 0, 8, "lightskyblue");
    circle.draw(60, -height / 12, 15, color.white);
    circle.draw(60, height / 12, 15, color.white);
    circle.draw(40, -height / 10, 15, "lightskyblue");
    // ctx.restore();

    // ctx.font = "30px Arial";

    // ctx.fillText("Hello World", 10, 80);

    ctx.restore();

    window.setTimeout(orbit.draw(70), 300);
    window.setTimeout(orbit.draw(135 * sineCounter), 800);
    window.setTimeout(orbit.draw(190 * sineCounter * sineCounter), 1000);
    window.setTimeout(orbit.draw(width/4 * sineCounter * sineCounter), 3000);

    line.draw(-width / 4, -height / 3);
    line.draw(width / 4, -height / 3);
    line.draw(-width / 2.75, 0);
    line.draw(width / 2.75, 0);
    line.draw(width / 4, height / 3);
    line.draw(-width / 4, height / 3);

    let newCount = this.state.counter2 < 159 ? this.state.counter2 + 1 : 0;

    let OrbitId = null;
    this.setState({ counter2: newCount });
    if (this.state.counter2 < 150) {
      OrbitId = window.requestAnimationFrame(this.updateOrbit);
    } else {
      OrbitId = null;
    }

    this.setState({ OrbitId: OrbitId });
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
        width={this.state.width * 0.68}
        height={this.state.height}
        style={{ position: "fixed", zIndex: "2" }}
      />
    );
  }
}
