import {light} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['LUBEEZ-12AB'],
        model: '12AB',
        vendor: 'Lubeez',
        description: 'zigbee 3.0 AC dimmer',
        extend: [light({configureReporting: true})],
    },
];

export default definitions;
module.exports = definitions;
