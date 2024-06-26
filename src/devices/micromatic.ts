import {electricityMeter, light} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['SZ1000'],
        model: 'ZB250',
        vendor: 'Micro Matic Norge AS',
        description: 'Zigbee dimmer for LED',
        extend: [light({configureReporting: true}), electricityMeter()],
    },
];

export default definitions;
module.exports = definitions;
