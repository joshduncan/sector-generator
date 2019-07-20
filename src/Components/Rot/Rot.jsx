import React, {Component} from 'react'
import RotLogic from './Rot.logic'
import DiceRoller from '../../DiceRoller/DiceRoller'

class Rot extends Component {
    state = {
        random: this.props.random,
        shouldSelect: false,
        selected: undefined
    }

    onRandomRot = () => {
        this.setState({random: true});
    }

    onSelectRot = () => {
        this.setState({shouldSelect: true});
    }

    onRotChosen = ({target}) => {
        this.setState({selected: target.innerText})
    }

    render() {
        let content = (
            <React.Fragment>
                <button onClick={this.onRandomRot}>Random Rot</button>
                <button onClick={this.onSelectRot}>Select Rot</button>
            </React.Fragment>)
        if (this.state.random) {
            const {rot, roll} = RotLogic.getRandomRot();
            content = <div>{`${DiceRoller.toString(roll)}: ${rot}`}</div>
        } else if (this.state.selected) {
            content = <div>{this.state.selected}</div>
        } else if (this.state.shouldSelect) {
            const buttons = RotLogic.distinctTypes.map((type, idx) => {
                return (<button key={idx} onClick={this.onRotChosen}>{type}</button>)
            });
            content = <React.Fragment>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {buttons}
                    </div>
                </React.Fragment>   
        }

        return (
            <React.Fragment>
                <h1>Rot:</h1>
                <div style={{width:'100%'}}/>
                {content}
            </React.Fragment>
        )
    }
}

export default Rot;