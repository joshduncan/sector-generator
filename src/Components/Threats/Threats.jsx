import React, { Component, Fragment } from "react";

import { LineBreak } from "../../Utils/Utils";
import Selector from "../Selector/Selector";
import ThreatsData from "./Threats.data";
import DiceRoller from "../../DiceRoller/DiceRoller";

class Threats extends Component {
  state = {
    artifactsInZone: "",
    threatLevel: "",
    threatsInZone: ""
  };

  componentDidUpdate() {
    if (this.state.threatLevel && this.state.artifactsInZone === "") {
      const roll = DiceRoller.rollxd6(Number(this.state.threatLevel));
      const artifactsInZone = roll.filter(r => r === 5).length;
      const threatsInZone = roll.filter(r => r === 0).length;

      this.setState({ artifactsInZone, threatsInZone });
    }
  }

  setThreatLevel = ({ target }) => {
    this.setState({ threatLevel: target.innerText });
  };

  render() {
    const threatLevels = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ].map(level => (
      <button key={level} onClick={this.setThreatLevel}>
        {level}
      </button>
    ));
    return (
      <Fragment>
        {!this.state.threatLevel && (
          <Fragment>
            <h1>Threats:</h1>
            <LineBreak />
            <h4>Select your threat level:</h4>
            <LineBreak />
            {threatLevels}
          </Fragment>
        )}
        {this.state.threatLevel && this.state.threatsInZone !== 0 && (
          <Fragment>
            <Selector title="Threats" data={ThreatsData} />
            <LineBreak />
            <h2>{`Magnitude of threat: ${
              this.state.threatsInZone
            } | Artifacts: ${this.state.artifactsInZone}`}</h2>
          </Fragment>
        )}
        {this.state.threatsInZone === 0 && (
          <Fragment>
            <h1>Threats:</h1>
            <LineBreak />
            <h2>{`No threats in zone | ${
              this.state.artifactsInZone === 0
                ? "No artifacts in zone"
                : `Artifacts: ${this.state.artifactsInZone}`
            }`}</h2>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Threats;
