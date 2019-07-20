import React from 'react';
import rotData from './Rot.data';
import Selector from '../Selector/Selector';

const Rot = () => {
    console.log(rotData)
    return <Selector title="Rot" data={rotData}/>
}

export default Rot;