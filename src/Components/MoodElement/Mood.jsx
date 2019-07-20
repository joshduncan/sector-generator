import React from 'react'
import moodData from './Mood.data';
import Selector from '../Selector/Selector'

const Mood = (props) => {

    return <Selector title="Mood" data={moodData}></Selector>
}

export default Mood;