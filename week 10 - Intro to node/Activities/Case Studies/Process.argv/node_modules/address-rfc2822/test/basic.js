
const fs    = require('fs');
const path  = require('path');

const parse = require('../index').parse;

function _check (test, line, details) {
    test.expect(Object.keys(details).length);
    const parsed = parse(line)[0];
    // console.log("Parsed: ", parsed);
    for (const k in details) {
        test.equal(parsed[k](), details[k], "Test '" + k + "' for '" + parsed[k]() + "' = '" + details[k] + "' from " + JSON.stringify(parsed));
    }
    test.done();
}

const raw_data = fs.readFileSync(path.join(__dirname, 'emails.txt'), "UTF-8");

const tests = raw_data.split(/\n\n/).map(function (rows) {
    const lines = rows.split(/\n/);
    if (lines[0] === '') lines.shift();
    return lines.filter(function (l) { return !/^#/.test(l) });
});

exports.basic = {};
tests.forEach(function (test) {
    const details = {};
    details.format = test[1];
    if (test[2]) {
        details.name = test[2];
    }
    exports.basic[test[0]] = function (t) {
        _check(t, test[0], details);
    }
})
