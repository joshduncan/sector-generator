import React, {Component} from 'react'
import ThreatsLogic from './Threats.logic'
import DiceRoller from '../../DiceRoller/DiceRoller'
import {LineBreak} from '../../Utils/Utils'

class Ruins extends Component {
    state = {
        artifactsInZone: -1,
        random: this.props.random,
        shouldSelect: false,
        selected: undefined,
        threat: undefined,
        threatLevel: undefined,
        theatType: '',
        threatsInZone: -1,
    }

    componentDidUpdate = () => {
        if (this.state.threatLevel && this.state.threatsInZone === -1) {
            const roll = DiceRoller.rollxd6(Number(this.state.threatLevel));
            const artifactsInZone = roll.filter(r => r === 5).length;
            const threatsInZone = roll.filter(r => r === 0).length;
            this.setState({artifactsInZone, threatsInZone});
        }

        if (this.state.threatType === 'Random') {
            const {threatType} = ThreatsLogic.types.getRandomThreatType();
            this.setState({threatType});
        }

        if (this.state.threat === 'Random') {
            const {threat} = ThreatsLogic[this.state.threatType].getRandomThreat();
            this.setState({threat});
        }
    }

    selectThreatLevel = ({target}) => {
        this.setState({threatLevel: target.name});
    }

    selectThreatType = ({target}) => {
        this.setState({threatType: target.name});
    }


    selectThreat = ({target}) => {
        this.setState({threat: target.name});
    }

    render() {
        const possibleThreats = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        let content = (
            <React.Fragment>
            <h1>Please pick a threat level:</h1>
            <LineBreak />
            {possibleThreats.map((val, idx) => {
                return <button key={idx} onClick={this.selectThreatLevel} name={val}>{val}</button>
            })}
            </React.Fragment>)

        if (this.state.threatsInZone !== -1) {
            const threatsAndArtifacts = <h1>Threat Level In Zone: {this.state.threatsInZone} | Artifacts In Zone: {this.state.artifactsInZone}</h1>
            if (this.state.threatsInZone > 0 && !this.state.random) {
                if (this.state.threat === 'Select') {
                    content = <React.Fragment>
                        {threatsAndArtifacts}
                        <LineBreak />
                        <h1>Threat type is {this.state.threatType}. Choose a threat:</h1>
                        <LineBreak />
                        {ThreatsLogic[this.state.threatType].distinctTypes.map((key, idx) => {
                            return <button key={idx} onClick={this.selectThreat} name={key}>{key}</button>
                        })}
                    </React.Fragment>
                } else if (this.state.threat && this.state.threat !== 'Random') {
                    content = <React.Fragment>
                    {threatsAndArtifacts}
                    <LineBreak />
                    <h1>Threat is: {this.state.threat}</h1>
                </React.Fragment>
                } else if (!this.state.threatType) {
                    content = <React.Fragment>
                        {threatsAndArtifacts}
                        <LineBreak />
                        <button onClick={this.selectThreatType} name={'Random'}>{'Random Threat Type'}</button>
                        <button onClick={this.selectThreatType} name={'Select'}>{'Select Threat Type'}</button>
                    </React.Fragment>
                } else if (this.state.threatType === 'Select') {
                    content = <React.Fragment>
                        {threatsAndArtifacts}
                        <LineBreak />
                        {ThreatsLogic.types.distinctTypes.map((key, idx) => {
                            return <button key={idx} onClick={this.selectThreatType} name={key}>{key}</button>
                        })}
                    </React.Fragment>
                } else if (this.state.threatType !== 'Random') {
                    content = <React.Fragment>
                        {threatsAndArtifacts}
                        <LineBreak />
                        <h1>Threat type is {this.state.threatType}. Choose a threat:</h1>
                        <LineBreak />
                        <button onClick={this.selectThreat} name={'Random'}>{'Random Threat'}</button>
                        <button onClick={this.selectThreat} name={'Select'}>{'Select Threat'}</button>
                    </React.Fragment>
                }
            } else {
                content = threatsAndArtifacts;
            }
        }

        return (
            <React.Fragment>
                <h1>Threats:</h1>
                <LineBreak />
                {content}
            </React.Fragment>
        )
    }
}

export default Ruins;