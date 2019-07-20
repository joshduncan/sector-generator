import React from 'react'
import environmentData from './Environment.data';
import Selector from '../Selector/Selector';

const Environment = () => {
    return <Selector title="Environment" data={environmentData}/>
}

export default Environment;