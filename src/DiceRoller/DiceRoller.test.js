import DiceRoller from './DiceRoller'

describe('Dice Roller', () => {
    describe('rollxd6', () => {
        it ('Should return an array of rolls with length = x', () => {
            const results = DiceRoller.rollxd6(3);

            expect(results.length).toEqual(3);
        })
    });
});