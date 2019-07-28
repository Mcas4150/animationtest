import React, { Component } from "react";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, globalId: "" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    let globalId = window.setTimeout(this.updateCanvas, 500);
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



    const orbit = {
      draw: function() {
        ctx.beginPath();
        ctx.arc(550, 460, 135, 0, Math.PI * 2, false); // Earth orbit
        ctx.fillStyle = "deepskyblue";
        ctx.stroke();
      },
      rotate: function() {}
    };

    // ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 2000, 2000); // clear canvas

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    // ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
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

    ctx.translate(50, 0);
    ctx.beginPath();
    ctx.arc(20, 20, 8, 0, Math.PI * 2, true);
    ctx.fillStyle = "deepskyblue";
    ctx.stroke();
    ctx.fill();

    ctx.translate(60, -60);
    ctx.beginPath();
    ctx.arc(20, 20, 15 * Math.abs(Math.cos(angle)), 0, Math.PI * 2, true);
    ctx.fillStyle = "deepskyblue";
    ctx.stroke();

    ctx.translate(30, -85);
    ctx.beginPath();
    ctx.arc(20, 20, 15 * Math.abs(Math.cos(angle)), 0, Math.PI * 2, true);
    ctx.fillStyle = "deepskyblue";
    ctx.stroke();
    ctx.fill();

    ctx.translate(0, 28.5);

    ctx.moveTo(800, 300);
    ctx.lineTo(200, 100);
    ctx.fillStyle = "deepskyblue";
    ctx.restore();

    ctx.restore();
    window.setTimeout(orbit.draw(), 1500);

    // ctx.beginPath();
    // ctx.arc(550, 460, 135, 0, Math.PI * 2, false); // Earth orbit
    // ctx.stroke();

    ctx.beginPath();

    // let arcX = 90;
    // let arcY = 0;

    // ctx.arc(arcX, arcY, 75, 0, Math.PI * 2, false); // Earth orbit
    // ctx.stroke();
    // arcX += 1;
    // arcY += 1;
    ctx.beginPath();
    ctx.arc(550, 460, 200, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(550, 460, 255, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.restore();
    ctx.moveTo(550, 460);
    ctx.lineTo(250, 100);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();
    ctx.moveTo(550, 460);
    ctx.lineTo(850, 100);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();

    ctx.moveTo(550, 460);
    ctx.lineTo(130, 460);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();

    ctx.moveTo(550, 460);
    ctx.lineTo(900, 460);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();

    ctx.moveTo(550, 460);
    ctx.lineTo(840, 800);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();

    ctx.moveTo(550, 460);
    ctx.lineTo(275, 750);
    ctx.strokeStyle = "deepskyblue";
    ctx.stroke();

    ctx.restore();



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
