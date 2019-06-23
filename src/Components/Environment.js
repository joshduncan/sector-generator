import React, {Component} from 'react'
import EnvironmentLogic from './Environment.logic'

class Environment extends Component {
    state = {
        random: this.props.random,
        shouldSelect: false,
        selected: undefined
    }

    onRandomEnvironment = () => {
        this.setState({random: true});
    }

    onSelectEnvironment = () => {
        this.setState({shouldSelect: true});
    }

    onEnvironmentChosen = ({target}) => {
        this.setState({selected: target.innerText})
    }

    render() {
        let content = (
            <React.Fragment>
                <button onClick={this.onRandomEnvironment}>Random Environment</button>
                <button onClick={this.onSelectEnvironment}>Select Environemnt</button>
            </React.Fragment>)
        if (this.state.random) {
            const {environment, roll} = EnvironmentLogic.getRandomEnvironment();
            content = <div>{`${roll.join('')}: ${environment}`}</div>
        } else if (this.state.selected) {
            content = <div>{this.state.selected}</div>
        } else if (this.state.shouldSelect) {
            const buttons = EnvironmentLogic.distinctTypes.map((type, idx) => {
                return (<button key={idx} onClick={this.onEnvironmentChosen}>{type}</button>)
            })
            content = <React.Fragment>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {buttons}
                    </div>
                </React.Fragment>
        }

        return (
            <React.Fragment>
                <h1>Environment:</h1>
                <div style={{width:'100%'}}/>
                {content}
            </React.Fragment>
        )
    }
}

export default Environment;