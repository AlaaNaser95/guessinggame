import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="1-100"
            aria-describedby="button-addon2"
            onChange={this.handleChange}
          />
          <div>
            <button
              className="btn btn-alert"
              type="button"
              id="button-addon2"
              onClick={() => this.makeGuess()}
            >
              Make a Guess
            </button>
          </div>
        </div>
      </div>
    );
  }
}
