import React, {Component, Fragment} from 'react'
import SelectorLogic from './Selector.logic';
import DiceRoller from '../../DiceRoller/DiceRoller';
import {LineBreak} from '../../Utils/Utils';

class Selector extends Component {
    state = {
        innerElement: '',
        innerFlavor: '',
        innerRoll: [],
        outerElement: '',
        outerRoll: [],
    }

    setRandomElement = () => {
        if (this.state.outerElement === '') {
            this.setState({outerElement: 'random'});
        } else {
            this.setState({innerElement: 'random'});
        }
    }

    setSelectElement = () => {
        const newState = {
        }
        if (this.state.outerElement === '') {
            newState.outerElement = 'select';
        } else {
            newState.innerElement = 'select';
        }

        this.setState(newState);
    }

    setOuterType = ({target}) => {
        this.setState({outerElement: target.innerText})
    }

    setInnerType = ({target}) => {
        const newState = {innerElement: target.innerText};
        if (this.state.outerElement && this.state.outerElement !== '---') {
            const data = this.props.data;
            const options = data.find(el => el.heading === this.state.outerElement).options;
            const flavor = options.find(el => el.heading === target.innerText).flavor;
            if (flavor) {
                newState.innerFlavor = flavor;
            }
        }
        this.setState(newState);
    }

    componentDidMount = () => {
        if (this.state.outerElement !== '---' && !this.props.data[0].hasOwnProperty('heading')) {
            this.setState({outerElement: '---'});
        }
    }
    componentDidUpdate = () => {
        if (this.state.outerElement === 'random') {
            const {element, roll} = SelectorLogic.selectRandomOuterElement(this.props.data);
            this.setState({outerElement: element.heading, outerRoll: roll, innerElement: 'random'});
        }
        if (this.state.innerElement === 'random') {
            let data = this.props.data;
            if (this.state.outerRoll.length > 0) {
                data = data[this.state.outerRoll].options
            } else if (this.state.outerElement && this.state.outerElement !== '---') {
                data = data.find(el => el.heading === this.state.outerElement).options;
            }
            const {element, roll} = SelectorLogic.selectRandomElement(data);
            this.setState({innerElement: element.heading, innerFlavor: element.flavor, innerRoll: roll});
        }
    }

    
    render = () => {
        const innerSelectorText = this.state.outerElement === '---' ? this.props.title: this.state.outerElement;
        return (<Fragment>
            <h1>{this.props.title}:</h1>
            <LineBreak />
            {this.state.outerRoll.length > 0 && this.state.outerElement !== '---' &&
                <h1>{DiceRoller.toString(this.state.outerRoll)}|&nbsp;</h1>
            }
            {this.state.outerElement && this.state.outerElement !== '---' &&  this.state.outerElement !== 'select' &&
                <h1>{this.state.outerElement}</h1>
            }
            {this.state.outerElement === '' &&
                <Fragment>
                    <button onClick={this.setRandomElement}>Random {this.props.title}</button>
                    <button onClick={this.setSelectElement}>Select {this.props.title}</button>
                </Fragment>
            }
            {this.state.outerElement === 'select' &&
                SelectorLogic.distinctValuesFromData(this.props.data).map((type, idx) => {
                    return (<button key={idx} onClick={this.setOuterType}>{type}</button>)
                })
            }
            <LineBreak />
            {this.state.innerRoll.length > 0 &&
                <h1>{DiceRoller.toString(this.state.innerRoll)}|&nbsp;</h1>
            }
            {this.state.innerElement && this.state.innerElement !== 'select' &&
                <h1>{this.state.innerElement}</h1>
            }
            {this.state.innerFlavor &&
                <Fragment>
                    <LineBreak />
                    <h2>&nbsp;{this.state.innerFlavor}</h2>
                </Fragment>
            }
            {this.state.innerElement === '' && this.state.outerElement && this.state.outerElement !== 'select' &&
                <Fragment>
                    <button onClick={this.setRandomElement}>Random {innerSelectorText}</button>
                    <button onClick={this.setSelectElement}>Select {innerSelectorText}</button>
                </Fragment>
            }
            {this.state.innerElement === 'select' && this.state.outerElement !== '---' &&
                SelectorLogic.distinctValuesFromData(this.props.data.find(el => el.heading === this.state.outerElement).options).map((type, idx) => {
                    return (<button key={idx} onClick={this.setInnerType}>{type}</button>)
                })
            }
            {this.state.innerElement === 'select' && this.state.outerElement === '---' &&
                SelectorLogic.distinctValuesFromData(this.props.data).map((type, idx) => {
                    return (<button key={idx} onClick={this.setInnerType}>{type}</button>)
                })
            }
        </Fragment>)
    }
}

export default Selector;