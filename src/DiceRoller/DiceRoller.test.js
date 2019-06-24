import DiceRoller from './DiceRoller'

describe('Dice Roller', () => {
    describe('rollxd6', () => {
        it ('Should return an array of rolls with length = x', () => {
            const results = DiceRoller.rollxd6(3);

            expect(results.length).toEqual(3);
        })
    });

    describe('toString', () => {
        it('should take in a roll array and return the string that matches 1-6 instead of 0-5', () => {
            const expected = '234';
            const actual = DiceRoller.toString([1, 2, 3]);

            expect(actual).toEqual(expected);
        });
    })
});