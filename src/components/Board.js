import React from "react";
import Square from "./Square";
export default class Board extends React.Component {
  renderSquare = (index) => {
    return (
      <Square
        value={this.props.squares[index]}
        handleClick={() => {
          this.props.clickAction(index);
        }}
      />
    );
  };
  render() {
    return (
      <div>
        <div className="border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="border-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="border-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
