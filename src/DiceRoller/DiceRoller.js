const DiceRoller = {};

DiceRoller.rollxd6 = (x) => {
    const results = [];
    for (let i = 0; i < x; ++i) {
        results.push(Math.floor(Math.random() * 6));
    }
    return results;
}

DiceRoller.toString = (roll) => roll.map(n => n + 1).join('')

export default DiceRoller