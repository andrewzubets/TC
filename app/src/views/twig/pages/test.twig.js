
import Twig from 'twig';

const {twig} = Twig;

export default twig({
    id: './src/views/twig/pages/test.twig',
    data: [{
        'type': 'logic',
        'token': {
            'type': 'Twig.logic.type.extends',
            'stack': [{ 'type': 'Twig.expression.type.string', 'value': 'layout.twig' }],
            'position': { 'start': 0, 'end': 27 },
        },
        'position': { 'start': 0, 'end': 27 },
    }, { 'type': 'raw', 'value': '\r\n\r\n', 'position': { 'start': 27, 'end': 31 } }, {
        'type': 'logic',
        'token': {
            'type': 'Twig.logic.type.block',
            'blockName': 'body',
            'position': { 'start': 31, 'end': 47 },
            'output': [{
                'type': 'raw',
                'value': '\r\n    <h1>Test</h1>\r\n\r\n',
                'position': { 'start': 47, 'end': 70 },
            }],
        },
        'position': { 'open': { 'start': 31, 'end': 47 }, 'close': { 'start': 70, 'end': 84 } },
    }],
    precompiled: true,
})
