import {light} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['DM A60F'],
        model: 'DM A60F',
        vendor: 'CY-LIGHTING',
        description: '6W smart dimmable E27 lamp 2700K',
        extend: [light()],
    },
];

export default definitions;
module.exports = definitions;
