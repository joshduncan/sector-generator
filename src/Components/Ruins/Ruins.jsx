import React, {Component} from 'react'
import RuinsLogic from './Ruins.logic'
import DiceRoller from '../../DiceRoller/DiceRoller'

class Ruins extends Component {
    state = {
        random: this.props.random,
        shouldSelect: false,
        selected: undefined
    }

    onRandomNormalRuins = () => {
        this.setState({random: 'normal'});
    }

    onSelectNormalRuins = () => {
        this.setState({shouldSelect: 'normal'});
    }

    onRandomIndustryRuins = () => {
        this.setState({random: 'industry'});
    }

    onSelectIndustryRuins = () => {
        this.setState({shouldSelect: 'industry'});
    }

    onRuinsChosen = ({target}) => {
        this.setState({selected: target.innerText})
    }

    render() {
        let content = (
            <React.Fragment>
                <button onClick={this.onRandomNormalRuins}>Random Normal Ruins</button>
                <button onClick={this.onSelectNormalRuins}>Select Normal Ruins</button>
                <button onClick={this.onRandomIndustryRuins}>Random Industry Ruins</button>
                <button onClick={this.onSelectIndustryRuins}>Select Industry Ruins</button>
            </React.Fragment>)
        if (this.state.random) {
            const logic = this.state.random === 'normal' ? RuinsLogic.normal : RuinsLogic.industry;
            const {ruins, roll} = logic.getRandomRuins();
            content = <div>{`${DiceRoller.toString(roll)}: ${ruins}`}</div>
        } else if (this.state.selected) {
            content = <div>{this.state.selected}</div>
        } else if (this.state.shouldSelect) {
            const logic = this.state.shouldSelect === 'normal' ? RuinsLogic.normal : RuinsLogic.industry;
            const buttons = logic.distinctTypes.map((type, idx) => {
                return (<button key={idx} onClick={this.onRuinsChosen}>{type}</button>)
            });
            content = <React.Fragment>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {buttons}
                    </div>
                </React.Fragment>   
        }

        return (
            <React.Fragment>
                <h1>Ruins:</h1>
                <div style={{width:'100%'}}/>
                {content}
            </React.Fragment>
        )
    }
}

export default Ruins;