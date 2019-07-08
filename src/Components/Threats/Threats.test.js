import ThreatsLogic from './Threats.logic'

describe('Threats', () => {
    describe('types', () => {
        describe('getThreatType', () => {
            it('takes a D6 roll and returns a string', () => {
                const expected = 'Humanoid';
                const actual = ThreatsLogic.types.getThreatType([0]);
    
                expect(actual).toEqual(expected);
            });
        });
    
        describe('getRandomThreatType', () => {
            it('rolls a random D6 roll and returns the result and the corresponding Threat type', () => {
                const {roll, threatType} = ThreatsLogic.types.getRandomThreatType();
                const expectedThreatType = ThreatsLogic.types.table[roll[0]]
                expect(threatType).toEqual(expectedThreatType)
            });
        });
    
        describe('distinctTypes', () => {
            it('should be an array of each distinct threat type', () => {
                const actual = ThreatsLogic.types.distinctTypes;
                const expected = ['Humanoid', 'Monster', 'Phenomenon'];
    
                 expect(actual).toEqual(expected);
            });
        });
    });

    describe('Humanoid', () => {
        describe('getThreat', () => {
            it('takes a D66 roll and returns a string', () => {
                const expected = 'Cannibals';
                const actual = ThreatsLogic.Humanoid.getThreat([0, 5]);
    
                expect(actual).toEqual(expected);
            });
        });
    
        describe('getRandomThreat', () => {
            it('rolls a random D6 roll and returns the result and the corresponding humanoid Threat', () => {
                const {roll, threat} = ThreatsLogic.Humanoid.getRandomThreat();
                const expectedThreat = ThreatsLogic.Humanoid.table[roll[0]][roll[1]]
                expect(threat).toEqual(expectedThreat)
            });
        });
    
        describe('distinctTypes', () => {
            it('should be an array of each distinct humanoid threat', () => {
                const actual = ThreatsLogic.Humanoid.distinctTypes;
                const expected = ['Amnesiac', 'Beast Mutants', 'Cannibals', 'Doom Cultists', 'Exiled Mutants',
                'Expedition from another Ark', 'Helldrivers', 'Morlocks', 'Nova Cultists', 'Patrol from the Ark',
                'Scrap Oracle', 'Wanderers', 'Water Trader', 'Wreckers', 'Zone-Ghouls'];
    
                 expect(actual).toEqual(expected);
            });
        });
    });

    describe('Monster', () => {
        describe('getThreat', () => {
            it('takes a D66 roll and returns a string', () => {
                const expected = 'Bitterbeasts';
                const actual = ThreatsLogic.Monster.getThreat([0, 5]);
    
                expect(actual).toEqual(expected);
            });
        });
    
        describe('getRandomThreat', () => {
            it('rolls a random D6 roll and returns the result and the corresponding Monster Threat', () => {
                const {roll, threat} = ThreatsLogic.Monster.getRandomThreat();
                const expectedThreat = ThreatsLogic.Monster.table[roll[0]][roll[1]]
                expect(threat).toEqual(expectedThreat)
            });
        });
    
        describe('distinctTypes', () => {
            it('should be an array of each distinct Monster threat', () => {
                const actual = ThreatsLogic.Monster.distinctTypes;
                const expected = ['Acid Grass', 'Air Jellies', 'Automaton', 'Bitterbeasts', 'Deathworm',
                'Devourer', 'Grazers', 'Gutfish (infected water)', 'Killer Tree', 'Mind Mosquitoes',
                'Nightmare Flowers', 'Parasite Fungus', 'Razorback', 'Rot Ants', 'Rotfish', 'Scrap Crows',
                'Trash Hawk', 'Worm Swarm', 'Zone Dogs', 'Zone Leeches', 'Zone Rats', 'Zone Spider', 'Zone Wasps'];
    
                 expect(actual).toEqual(expected);
            });
        });
    });

    describe('Phenomena', () => {
        describe('getThreat', () => {
            it('takes a D66 roll and returns a string', () => {
                const expected = 'Dust Tornado';
                const actual = ThreatsLogic.Phenomenon.getThreat([0, 5]);
    
                expect(actual).toEqual(expected);
            });
        });
    
        describe('getRandomThreat', () => {
            it('rolls a random D6 roll and returns the result and the corresponding Phenomenon Threat', () => {
                const {roll, threat} = ThreatsLogic.Phenomenon.getRandomThreat();
                const expectedThreat = ThreatsLogic.Phenomenon.table[roll[0]][roll[1]]
                expect(threat).toEqual(expectedThreat)
            });
        });
    
        describe('distinctTypes', () => {
            it('should be an array of each distinct Phenomenon threat', () => {
                const actual = ThreatsLogic.Phenomenon.distinctTypes;
                const expected = ['Acid Rain', 'Ash Storm', 'Dust Tornado', 'Electric Storm', 'Ghost Lights',
                'Inertia Field', 'Magnetic Field', 'Mirage', 'Mud Puddles', 'Night Lights', 'Obelisk',
                'Pillar of Light', 'Rot Hotspot', 'Rot Wind', 'Sinkhole', 'Temperature Drop / Heat Wave',
                'Unexploded Ordnance', 'Vacuum', 'Zone Smog'];
    
                 expect(actual).toEqual(expected);
            });
        });
    });
});