// import React from 'react'
import SelectorLogic from './Selector.logic'
import DiceRoller from '../../DiceRoller/DiceRoller';
// import { render, cleanup } from 'react-testing-library';

describe('Selector', () => {
    const testData = [{heading: 'test 1'}, {heading: 'test 2'}, {heading: 'test 3'}, {heading: 'test 4'}, {heading: 'test 5'}, {heading: 'test 6'}]
    const testData2d = [
        {options:['11', '12', '13', '14', '15', '16']},
        {options:['21', '22', '23', '24', '25', '26']},
        {options:['31', '32', '33', '34', '35', '36']},
        {options:['41', '42', '43', '44', '45', '46']},
        {options:['51', '52', '53', '54', '55', '56']},
        {options:['61', '62', '63', '64', '65', '66']}];

        const distinctTestData = [
            {options:[{heading: '11'}, {heading: '11'}, {heading: '11'}, {heading: '11'}, {heading: '11'}, {heading: '11'}]},
            {options:[{heading: '21'}, {heading: '21'}, {heading: '21'}, {heading: '21'}, {heading: '21'}, {heading: '21'}]},
            {options:[{heading: '31'}, {heading: '31'}, {heading: '31'}, {heading: '31'}, {heading: '31'}, {heading: '31'}]},
            {options:[{heading: '41'}, {heading: '41'}, {heading: '41'}, {heading: '41'}, {heading: '41'}, {heading: '41'}]},
            {options:[{heading: '51'}, {heading: '51'}, {heading: '51'}, {heading: '51'}, {heading: '51'}, {heading: '51'}]},
            {options:[{heading: '61'}, {heading: '61'}, {heading: '61'}, {heading: '61'}, {heading: '61'}, {heading: '61'}]}];
    
    // afterEach(cleanup);
    describe('SelectRandomElement', () => {
        it('Should select a random element from its data source, and return that element and the index rolled', () => {
            const {roll, element} = SelectorLogic.selectRandomElement(testData);
            const expectedElement = testData[roll[0]];

            expect(element).toEqual(expectedElement);
        });

        it('Should support 2 dimensionalArrays', () => {
            const {roll, element} = SelectorLogic.selectRandomElement(testData2d);
            const expectedElement = DiceRoller.toString(roll);

            expect(element).toEqual(expectedElement);
        });
    });

    describe('SelectRandomElement', () => {
        it('Should return correct element from given roll/data', () => {
            const actual = SelectorLogic.elementFromDataWithRoll(testData2d, [5, 0]);
            const expected = '61';

            expect(actual).toEqual(expected);
        });
    });

    describe('DistinctValuesFromData', () => {
        it('Should return a one dimensional array of distinct values based on headings', () => {
            const actual = SelectorLogic.distinctValuesFromData(distinctTestData);
            const expected = ['11', '21','31', '41', '51', '61'];

            expect(actual).toEqual(expected);
        });
    });
});