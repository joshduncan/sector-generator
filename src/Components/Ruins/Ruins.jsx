import React, {Component, Fragment} from 'react'
import ruinsData from './Ruins.data'
import Selector from '../Selector/Selector';
import { LineBreak } from '../../Utils/Utils';

class Ruins extends Component {
    state = {
        ruinsType: ''
    }

    setRuinsType = ({target}) => {
        this.setState({ruinsType: target.innerText});
    }

    render() {
        return <Fragment>
            {!this.state.ruinsType &&
                <Fragment>
                    <h1>Ruins:</h1>
                    <LineBreak />
                    <button onClick={this.setRuinsType}>Normal</button>
                    <button onClick={this.setRuinsType}>Industry</button>
                </Fragment>
            }
            {this.state.ruinsType === 'Normal' && 
                <Selector title="Ruins" data={ruinsData.normal} />
            }
            {this.state.ruinsType === 'Industry' && 
                <Selector title="Ruins" data={ruinsData.industry} />
            }
            </Fragment> 
    }
}

export default Ruins;