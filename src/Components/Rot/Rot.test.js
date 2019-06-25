import RotLogic from './Rot.logic'

describe('Rot', () => {
    describe('getRot', () => {
        it('should get the name of a type of rot from a passed in roll', () => {
            const expected = 'Rot Oasis (no rot)';
            const actual = RotLogic.getRot([0, 1]);

            expect(actual).toEqual(expected);
        })
    });

    describe('getRandomRot', () => {
        it('rolls a random D66 roll and returns the result and the corresponding Rot', () => {
            const {roll, rot} = RotLogic.getRandomRot();

            const expectedRot = RotLogic.table[roll[0]][roll[1]]
            expect(rot).toEqual(expectedRot)
        });
    });

    describe('distinctTypes', () => {
        it('should be an array of unique types of normal ruins', () => {
            const expected = ['Rot Oasis (no rot)', 'Weak Rot', 'Strong Rot'];
            const actual = RotLogic.distinctTypes;

            expect(actual).toEqual(expected);
        });
    });
});