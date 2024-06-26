import {onOff} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['FB56-SKT17AC1.4'],
        model: '67200BL',
        description: 'Vetaar smart plug',
        vendor: 'Anchor',
        extend: [onOff()],
    },
];

export default definitions;
module.exports = definitions;
