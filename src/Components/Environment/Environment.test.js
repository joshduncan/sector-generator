import EnvironmentLogic from './Environment.logic'

describe('Environment', ()=> {
    describe('getEnvironment', () => {
        it('takes a D66 roll and returns a string', () => {
            const expected = 'Thick Woods';
            const actual = EnvironmentLogic.getEnvironment([0, 1]);

            expect(actual).toEqual(expected);
        });
    });

    describe('getRandomEnvironment', () => {
        it('rolls a random D66 roll and returns the result and the corresponding environment', () => {
            const {roll, environment} = EnvironmentLogic.getRandomEnvironment();

            const expectedEnvironment = EnvironmentLogic.table[roll[0]][roll[1]]
            expect(environment).toEqual(expectedEnvironment)
        });
    });

    describe('distinctTypes', () => {
        it('should be an array of each distinct type of environment', () => {
            const actual = EnvironmentLogic.distinctTypes;
            const expected = ['Thick Woods', 'Scrublands', 'Marshlands', 'Dead Woods', 'Ash Desert',
            'Huge Crater', 'Glasified Field', 'Overgrown Ruins', 'Crumbling Ruins', 'Decayed Ruins',
             'Unscathed Ruins', 'Derelict Industries', 'Settlement'];

             expect(actual).toEqual(expected);
        });
    });
});