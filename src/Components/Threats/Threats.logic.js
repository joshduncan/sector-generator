import DiceRoller from '../../DiceRoller/DiceRoller'
import {distinct} from '../../Utils/Utils'

const ThreatsLogic = {
    types: {},
    Humanoid: {},
    Monster: {},
    Phenomenon: {},
}

ThreatsLogic.types.getThreatType = (diceRoll) => {
    return ThreatsLogic.types.table[diceRoll[0]];
}

ThreatsLogic.types.getRandomThreatType = () => {
    const diceRoll = DiceRoller.rollxd6(1);
    return {
        threatType: ThreatsLogic.types.getThreatType(diceRoll),
        roll: diceRoll,
    };
}

ThreatsLogic.types.table = ['Humanoid', 'Humanoid', 'Monster', 'Monster', 'Monster', 'Phenomenon']

ThreatsLogic.types.distinctTypes = distinct(ThreatsLogic.types.table)

ThreatsLogic.Humanoid.getThreat = (diceRoll) => {
    return ThreatsLogic.Humanoid.table[diceRoll[0]][diceRoll[1]];
}

ThreatsLogic.Humanoid.getRandomThreat = () => {
    const diceRoll = DiceRoller.rollxd6(2);
    return {
        threat: ThreatsLogic.Humanoid.getThreat(diceRoll),
        roll: diceRoll,
    };
}

ThreatsLogic.Humanoid.table = [['Amnesiac', 'Beast Mutants', 'Beast Mutants', 'Cannibals', 'Cannibals', 'Cannibals'],
 ['Doom Cultists', 'Doom Cultists', 'Exiled Mutants', 'Exiled Mutants', 'Exiled Mutants', 'Expedition from another Ark'],
 [ 'Expedition from another Ark',  'Expedition from another Ark', 'Helldrivers', 'Helldrivers', 'Helldrivers', 'Morlocks'],
 ['Morlocks', 'Morlocks', 'Nova Cultists', 'Nova Cultists', 'Patrol from the Ark', 'Patrol from the Ark'],
 ['Scrap Oracle', 'Scrap Oracle', 'Wanderers', 'Wanderers', 'Water Trader', 'Water Trader'],
 ['Wreckers', 'Wreckers', 'Zone-Ghouls', 'Zone-Ghouls', 'Zone-Ghouls', 'Zone-Ghouls']];

ThreatsLogic.Humanoid.distinctTypes = distinct(ThreatsLogic.Humanoid.table)

ThreatsLogic.Monster.getThreat = (diceRoll) => {
    return ThreatsLogic.Monster.table[diceRoll[0]][diceRoll[1]];
}

ThreatsLogic.Monster.getRandomThreat = () => {
    const diceRoll = DiceRoller.rollxd6(2);
    return {
        threat: ThreatsLogic.Monster.getThreat(diceRoll),
        roll: diceRoll,
    };
}

ThreatsLogic.Monster.table = [['Acid Grass', 'Acid Grass', 'Air Jellies', 'Automaton', 'Bitterbeasts', 'Bitterbeasts'],
['Deathworm', 'Deathworm', 'Devourer', 'Devourer', 'Grazers', 'Grazers'],
['Gutfish (infected water)', 'Killer Tree', 'Mind Mosquitoes', 'Nightmare Flowers', 'Parasite Fungus', 'Razorback'],
['Rot Ants', 'Rot Ants', 'Rotfish', 'Scrap Crows', 'Scrap Crows', 'Trash Hawk'],
['Worm Swarm', 'Zone Dogs', 'Zone Dogs', 'Zone Dogs', 'Zone Leeches', 'Zone Leeches'],
['Zone Rats', 'Zone Rats', 'Zone Spider', 'Zone Spider', 'Zone Wasps', 'Zone Wasps']];

ThreatsLogic.Monster.distinctTypes = distinct(ThreatsLogic.Monster.table)

ThreatsLogic.Phenomenon.getThreat = (diceRoll) => {
    return ThreatsLogic.Phenomenon.table[diceRoll[0]][diceRoll[1]];
}

ThreatsLogic.Phenomenon.getRandomThreat = () => {
    const diceRoll = DiceRoller.rollxd6(2);
    return {
        threat: ThreatsLogic.Phenomenon.getThreat(diceRoll),
        roll: diceRoll,
    };
}

ThreatsLogic.Phenomenon.table = [['Acid Rain', 'Acid Rain', 'Acid Rain', 'Ash Storm', 'Ash Storm', 'Dust Tornado'],
['Dust Tornado', 'Electric Storm', 'Electric Storm', 'Ghost Lights', 'Inertia Field', 'Magnetic Field'],
['Magnetic Field', 'Mirage', 'Mud Puddles', 'Mud Puddles', 'Night Lights', 'Night Lights'],
['Obelisk', 'Pillar of Light', 'Pillar of Light', 'Rot Hotspot', 'Rot Hotspot', 'Rot Hotspot'],
['Rot Wind', 'Rot Wind', 'Sinkhole', 'Sinkhole', 'Temperature Drop / Heat Wave', 'Temperature Drop / Heat Wave'],
['Unexploded Ordnance', 'Unexploded Ordnance', 'Vacuum', 'Zone Smog', 'Zone Smog', 'Zone Smog']];

ThreatsLogic.Phenomenon.distinctTypes = distinct(ThreatsLogic.Phenomenon.table)


export default ThreatsLogic;