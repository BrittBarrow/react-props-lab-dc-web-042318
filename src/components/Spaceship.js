import React from "react";

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <ul>
          <li>{this.props.colors}</li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};
