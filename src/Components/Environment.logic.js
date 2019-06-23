import DiceRoller from '../DiceRoller/DiceRoller'

const EnvironmentLogic = {}

EnvironmentLogic.getEnvironment = (diceRoll) => {
    return EnvironmentLogic.table[diceRoll[0]][diceRoll[1]];
}

EnvironmentLogic.getRandomEnvironment = () => {
    const diceRoll = DiceRoller.rollxd6(2);
    return {
        environment: EnvironmentLogic.getEnvironment(diceRoll),
        roll: diceRoll,
    };
}

EnvironmentLogic.table = [['Thick Woods', 'Thick Woods', 'Scrublands', 'Scrublands', 'Scrublands', 'Marshlands'],
['Marshlands', 'Dead Woods', 'Dead Woods', 'Dead Woods', 'Ash Desert', 'Ash Desert'],
['Huge Crater', 'Glasified Field', 'Overgrown Ruins', 'Overgrown Ruins', 'Overgrown Ruins', 'Crumbling Ruins'],
['Crumbling Ruins', 'Crumbling Ruins', 'Decayed Ruins', 'Decayed Ruins', 'Decayed Ruins', 'Decayed Ruins'],
['Decayed Ruins', 'Unscathed Ruins', 'Unscathed Ruins', 'Unscathed Ruins', 'Unscathed Ruins', 'Unscathed Ruins'],
['Derelict Industries', 'Derelict Industries', 'Derelict Industries', 'Derelict Industries', 'Settlement', 'Settlement']]

EnvironmentLogic.distinctTypes = [...new Set(EnvironmentLogic.table.reduce((prev, cur) => {
    return prev.concat(cur);
}, []))];

export default EnvironmentLogic;