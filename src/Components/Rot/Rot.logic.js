import DiceRoller from "../../DiceRoller/DiceRoller";

const RotLogic = {
    industry: {},
    normal: {},
}

RotLogic.getRot = (roll) => RotLogic.table[roll[0]][roll[1]]

RotLogic.getRandomRot = () => {
    const roll = DiceRoller.rollxd6(2);
    return {
        roll,
        rot: RotLogic.getRot(roll)
    };
}

const generateRotOptions = () => {
    const initial = new Array(6).fill('Weak Rot');
    const final = [[...initial], [...initial], [...initial], [...initial], [...initial], [...initial]]
    
    final[0][0] = final[0][1] = 'Rot Oasis (no rot)';
    final[5][4] = final[5][5] = 'Strong Rot';

    return final;
}

RotLogic.table = generateRotOptions();

RotLogic.distinctTypes = [...new Set(RotLogic.table.reduce((prev, cur) => prev.concat(cur), []))];

export default RotLogic;