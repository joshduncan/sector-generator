import RuinsLogic from './Ruins.logic'

describe('Ruins', () => {
    describe('Normal', () => {
        describe('getRuins', () => {
            it('should get the name of a type of ruins from a passed in roll', () => {
                const expected = 'Amusement Park';
                const actual = RuinsLogic.normal.getRuins([0, 1]);
    
                expect(actual).toEqual(expected);
            })
        });

        describe('getRandomRuins', () => {
            it('rolls a random D66 roll and returns the result and the corresponding ruins', () => {
                const {roll, ruins} = RuinsLogic.normal.getRandomRuins();
    
                const expectedRuins = RuinsLogic.normal.table[roll[0]][roll[1]]
                expect(ruins).toEqual(expectedRuins)
            });
        });

        describe('distinctTypes', () => {
            it('should be an array of unique types of normal ruins', () => {
                const expected = ['Airplane Wreck', 'Amusement Park', 'Battlefield', 'Bus Station', 'Car Park', 'Church',
                    'Cinema', 'Crater', 'Dilapidaed Mansion', 'Fast Food Joint', 'Gas Station', 'Highway',
                    'Hospital', 'Hunting Store', 'Mall', 'Marina', 'Museum', 'Office Building',
                    'Overgrown Park', 'Playground', 'Police Station', 'Radio Station', 'Residential Blocks', 'Road Tunnel',
                    'Ruined Bridge', 'School', 'Shelter', 'Skyscraper', 'Sports Center', 'Suburbia',
                    'Subway Station', 'Supermarket', 'Swimming Hall', 'Tank', 'Theater', 'Train Station'];
                const actual = RuinsLogic.normal.distinctTypes;

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('Industry', () => {
        describe('getRuins', () => {
            it('should get the name of a type of ruins from a passed in roll', () => {
                const expected = 'Factory';
                const actual = RuinsLogic.industry.getRuins([0, 1]);
    
                expect(actual).toEqual(expected);
            })
        });

        describe('getRandomRuins', () => {
            it('rolls a random D66 roll and returns the result and the corresponding ruins', () => {
                const {roll, ruins} = RuinsLogic.industry.getRandomRuins();
    
                const expectedRuins = RuinsLogic.industry.table[roll[0]][roll[1]]
                expect(ruins).toEqual(expectedRuins)
            });
        });

        describe('distinctTypes', () => {
            it('should be an array of unique types of industry ruins', () => {
                const expected = ['Factory', 'Military Base',
                    'Oil Cistern', 'Pipeline',
                    'Purification Plant', 'Power Line',
                    'Radio Mast', 'Refinery',
                    'Rubbish Dump', 'Shipwreck',
                    'Shooting Range', 'Windmill'];
                const actual = RuinsLogic.industry.distinctTypes;

                expect(actual).toEqual(expected);
            });
        });
    });
});