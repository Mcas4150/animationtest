import React, { Component } from "react";

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
    let angle = 0;

    let sineCounter = Math.abs(Math.sin(this.state.counter/100));
    let cosineCounter = Math.abs(Math.cos(this.state.counter/100));

    const orbit = {
      draw: function(radius) {
        ctx.beginPath();
        ctx.arc(550, 460, radius, 0, Math.PI * 2, false); // Earth orbit
        ctx.fillStyle = "deepskyblue";
        ctx.stroke();
      },
      rotate: function() {}
    };

    const circle = {
      draw: function(radius, color) {
        ctx.beginPath();
        ctx.arc(20, 20, radius, 0, Math.PI * 2, true);
        ctx.fillStyle = color;
        ctx.stroke();
        ctx.fill();
      }
    };

    const line = {
      draw: function(x, y) {
        ctx.restore();
        ctx.moveTo(550, 460);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "turqoise";
        ctx.stroke();
      }
    };

    // ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 2000, 2000);

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "darkgrey";
    ctx.save();
    ctx.moveTo(0, this.state.height / 2);
    ctx.translate(550, 460);

    // orbit 1
    ctx.rotate(
      (((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()) *
        5
    );

    ctx.translate(50 * sineCounter , 0);
    circle.draw(8 * sineCounter, "deepskyblue");

    ctx.translate(60 * sineCounter, -60 * sineCounter);
    circle.draw(15 * sineCounter, "white");

    ctx.translate(30 * sineCounter, -85 * sineCounter);
    circle.draw(15 * sineCounter, "deepskyblue");

    ctx.restore();
    window.setTimeout(orbit.draw(135 * sineCounter), 1500);
    window.setTimeout(orbit.draw(200 * sineCounter), 2500);
    window.setTimeout(orbit.draw(255 * sineCounter), 3000);

    line.draw(250 , 100);
    line.draw(850, 100);
    line.draw(130, 460);
    line.draw(900, 460);
    line.draw(840, 800);
    line.draw(275, 750);

    let newCount = this.state.counter < 100 ? this.state.counter + 0.5 : 0;
    this.setState({ counter: newCount });
    const globalId = window.requestAnimationFrame(this.updateCanvas);
    this.setState({ globalId: globalId });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <canvas
        className="canvas"
        ref="canvas"
        width={window.innerWidth * 0.68}
        height={window.innerHeight}
        style={{ position: "fixed", zIndex: "2" }}
      />
    );
  }
}
