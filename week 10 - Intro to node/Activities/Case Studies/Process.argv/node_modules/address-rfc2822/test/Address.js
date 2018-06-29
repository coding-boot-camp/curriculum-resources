const address = require('../index');

exports.host = {
    'user@example.com' : function (test) {
        test.expect(1);
        const r = new address.Address(null, 'user@example.com');
        test.equal(r.host(), 'example.com');
        test.done();
    },
}

exports.user = {
    'user@example.com' : function (test) {
        test.expect(1);
        const r = new address.Address(null, 'user@example.com');
        test.equal(r.user(), 'user');
        test.done();
    },
}
