import DiceRoller from "../../DiceRoller/DiceRoller";


    const selectRandomElement = (data) => {
        let numberOfDice = 1;
        let testVar = data[0];
        while (testVar.hasOwnProperty('options')) {
            ++numberOfDice;
            testVar = testVar.options[0];
        }
        const roll = DiceRoller.rollxd6(numberOfDice);
        return {element: elementFromDataWithRoll(data, roll), roll}
    };

    const elementFromDataWithRoll = (data, roll) => {
        return roll.reduce((prev, cur, idx) => idx === roll.length - 1 ? prev[cur] : prev[cur].options, data);
    };

    const distinctValuesFromData = (data) => {
        const reducer = (prev, cur) => {
            if (cur.hasOwnProperty('options')) {
                return prev.concat(cur.options.reduce(reducer, []));
            } else {
                prev.push(cur.heading);
                return prev;
            }
        };
        const allValues = data.reduce(reducer, []);
        return [...new Set(allValues)];
    };

    const SelectorLogic = {
        distinctValuesFromData,
        elementFromDataWithRoll,
        selectRandomElement,
    }
export default SelectorLogic;