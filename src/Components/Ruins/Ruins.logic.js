import DiceRoller from "../../DiceRoller/DiceRoller";

const RuinsLogic = {
    industry: {},
    normal: {},
}

RuinsLogic.normal.getRuins = (roll) => RuinsLogic.normal.table[roll[0]][roll[1]]

RuinsLogic.normal.getRandomRuins = () => {
    const roll = DiceRoller.rollxd6(2);
    return {
        roll,
        ruins: RuinsLogic.normal.getRuins(roll)
    };
}

RuinsLogic.normal.table = [['Airplane Wreck', 'Amusement Park', 'Battlefield', 'Bus Station', 'Car Park', 'Church'],
['Cinema', 'Crater', 'Dilapidaed Mansion', 'Fast Food Joint', 'Gas Station', 'Highway'],
['Hospital', 'Hunting Store', 'Mall', 'Marina', 'Museum', 'Office Building'],
['Overgrown Park', 'Playground', 'Police Station', 'Radio Station', 'Residential Blocks', 'Road Tunnel'],
['Ruined Bridge', 'School', 'Shelter', 'Skyscraper', 'Sports Center', 'Suburbia'],
['Subway Station', 'Supermarket', 'Swimming Hall', 'Tank', 'Theater', 'Train Station']];

RuinsLogic.normal.distinctTypes = RuinsLogic.normal.table.reduce((prev, cur) => prev.concat(cur), []);

RuinsLogic.industry.getRuins = (roll) => RuinsLogic.industry.table[roll[0]][roll[1]]

RuinsLogic.industry.getRandomRuins = () => {
    const roll = DiceRoller.rollxd6(2);
    return {
        roll,
        ruins: RuinsLogic.industry.getRuins(roll)
    };
}

RuinsLogic.industry.table = [['Factory', 'Factory', 'Factory', 'Military Base', 'Military Base', 'Military Base'],
['Oil Cistern', 'Oil Cistern', 'Oil Cistern', 'Pipeline', 'Pipeline', 'Pipeline'],
['Purification Plant', 'Purification Plant', 'Purification Plant', 'Power Line', 'Power Line', 'Power Line'],
['Radio Mast', 'Radio Mast', 'Radio Mast', 'Refinery', 'Refinery', 'Refinery'],
['Rubbish Dump', 'Rubbish Dump', 'Rubbish Dump', 'Shipwreck', 'Shipwreck', 'Shipwreck'],
['Shooting Range', 'Shooting Range', 'Shooting Range', 'Windmill', 'Windmill', 'Windmill']];

RuinsLogic.industry.distinctTypes = [...new Set(RuinsLogic.industry.table.reduce((prev, cur) => prev.concat(cur), []))];
export default RuinsLogic;