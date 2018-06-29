const address = require('../index');

exports.isAllLower = {
    'lower latin string' : function (test) {
        test.expect(1);
        test.equal(true, address.isAllLower('abcdefg'));
        test.done();
    },
}

exports.isAllUpper = {
    'upper latin string' : function (test) {
        test.expect(1);
        test.equal(true, address.isAllUpper('ABCDEFG'));
        test.done();
    }
}

exports.nameCase = {
    'john doe -> John Doe' : function (test) {
        test.expect(1);
        test.equal('John Doe', address.nameCase('john doe'));
        test.done();
    },
    'JANE SMITH -> Jane Smith' : function (test) {
        test.expect(1);
        test.equal('Jane Smith', address.nameCase('JANE SMITH'));
        test.done();
    },
    'marty mcleod -> Marty McLeod': function (test) {
        test.expect(1);
        test.equal('Marty McLeod', address.nameCase('marty mcleod'));
        test.done();
    },
    'martin o\'mally -> Martin O\'Malley': function (test) {
        test.expect(1);
        test.equal("Martin O'Malley", address.nameCase("martin o'malley"));
        test.done();
    },
    'level iii support -> Level III Support': function (test) {
        test.expect(1);
        test.equal("Level III Support", address.nameCase("level iii support"));
        test.done();
    }
}

exports.parseFrom = {
    'Travis CI <builds@travis-ci.org>': function (test) {
        test.expect(1);
        try {
            const r = address.parseFrom('Travis CI <builds@travis-ci.org>');
            test.equal(r[0].address, 'builds@travis-ci.org');
            // console.log(r);
        }
        catch (e) {
            console.error(e);
        }
        test.done();
    }
}

exports.parseSender = {
    '"Anne Standley, PMPM" <info=protectmypublicmedia.org@mail172.atl101.mcdlv.net>': function (test) {
        test.expect(1);
        try {
            const r = address.parseSender('"Anne Standley, PMPM" <info=protectmypublicmedia.org@mail172.atl101.mcdlv.net>');
            test.equal(r[0].address, 'info=protectmypublicmedia.org@mail172.atl101.mcdlv.net');
            // console.log(r);
        }
        catch (e) {
            console.error(e);
        }
        test.done();
    }
}

exports.parseReplyTo = {
    '=?utf-8?Q?Anne=20Standley=2C=20Protect=20My=20Public=20Media?= <info@protectmypublicmedia.org>': function (test) {
        test.expect(1);
        try {
            const r = address.parseReplyTo('=?utf-8?Q?Anne=20Standley=2C=20Protect=20My=20Public=20Media?= <info@protectmypublicmedia.org>');
            test.equal(r[0].address, 'info@protectmypublicmedia.org');
            // console.log(r);
        }
        catch (e) {
            console.error(e);
        }
        test.done();
    }
}
