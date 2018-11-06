import React, { Component } from "react";

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faRedo } from "@fortawesome/free-solid-svg-icons";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToGuess: 0,
      attempt: 0,
      win: false,
      guess: 0,
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.makeGuess = this.makeGuess.bind(this);
  }
  handleChange(event) {
    this.setState({ guess: +event.target.value });
  }
  makeGuess() {
    this.setState({ attempt: this.state.attempt + 1 });
    if (this.state.guess === this.state.numberToGuess) {
      this.setState({ text: "You Win", win: true });
    } else if (this.state.attempt === 4 && !this.state.win) {
      this.setState({ text: "GAME OVER !!!" });
    } else if (Math.abs(this.state.guess - this.state.numberToGuess) > 10) {
      this.setState({ text: "Your guess is too far" });
    } else {
      this.setState({ text: "Your guess is too close" });
    }
  }
  componentDidMount() {
    this.setState({ numberToGuess: Math.floor(Math.random() * 100) });
  }
  getView() {
    if (this.state.attempt === 5 || this.state.win) {
      return (
        <div className="card bg-dark my-3" style={{ opacity: "0.8" }}>
          <h4 className=" text-light my-4">{this.state.text}</h4>
          <h6 style={{ color: "black" }}>Correct Number:</h6>
          <h5 className="text-primary mb-4">{this.state.numberToGuess}</h5>
          {/* <img
            src="https://www.iconspng.com/images/open-box/open-box.jpg"
            style={{ width: 90 }}
          /> */}
          <div>
            <button
              className="btn bg-warning mb-3"
              type="button"
              id="button-addon2"
              onClick={() => this.playAgain()}
            >
              Play Again
              <div>
                <FontAwesomeIcon icon={faGamepad} />
              </div>
            </button>
          </div>
        </div>
      );
    } else {
      const intro = !this.state.attempt
        ? "Try to Guess the number between 1-100 \n"
        : "";
      const warning = !this.state.attempt
        ? "Becareful with your guesses You have only 5 attempts"
        : "";
      const remaining = this.state.attempt
        ? `${5 - this.state.attempt} attempts remaining`
        : "";
      return (
        <div>
          <div>
            <h6 className="my-5" style={{ color: "white" }}>
              {this.state.text}
              {intro}
              <br />
              {warning}
            </h6>
          </div>
          <div className="form-group mb-3">
            {/* <div>
              <img
                src="https://www.iconspng.com/images/3d-isometric-cardboard-box/3d-isometric-cardboard-box.jpg"
                style={{ width: 90 }}
              />
            </div> */}
            <input
              className=" text-center mb-3"
              type="text"
              placeholder="1-100"
              aria-describedby="button-addon2"
              onChange={this.handleChange}
            />
            <div>
              <button
                className="btn  bg-warning mb-2"
                type="button"
                id="button-addon2"
                onClick={() => this.makeGuess()}
              >
                Make a Guess
              </button>
            </div>
            <div>
              <button
                className="btn btn-alert"
                type="button"
                id="button-addon2"
                onClick={() => this.playAgain()}
              >
                Restart <FontAwesomeIcon icon={faRedo} />
              </button>
            </div>

            <div className="text-danger">{remaining} </div>
          </div>
        </div>
      );
    }
  }
  playAgain() {
    this.setState({ attempt: 0 });
    this.setState({ numberToGuess: Math.floor(Math.random() * 100) });
    this.setState({ guess: 0 });
    this.setState({ win: false });
    this.setState({ text: false });
  }
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage:
            "url(" +
            "https://www.beautywithinclinic.com/resources/images/content/2018/4/p0sss-texture-pack-1-weave-blue-hairpng-opengameartorg.png" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "noRepeat"
        }}
      >
        <div className="container">
          <h1 style={{ color: "orange", paddingTop: "20px" }}>Guessing Game</h1>
          {this.getView()}
        </div>
      </div>
    );
  }
}

export default App;
