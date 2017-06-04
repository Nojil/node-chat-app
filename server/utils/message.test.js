const expect = require("expect");

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Charles';
        var text = 'Some Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });

});
