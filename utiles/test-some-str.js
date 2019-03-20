const wildcard_to_regexp = require('./wildcard-to-regexp');

const WILDCARD_CACHE = {};

const test_some_str = (str, tester) => {
    let b;
    if(typeof(tester) === 'string'){
        if(!(tester in WILDCARD_CACHE)){
            WILDCARD_CACHE[tester] = wildcard_to_regexp(tester);
        }
        b = WILDCARD_CACHE[tester].test(str);
    } else if(typeof(tester) === 'function'){
        b = tester(str);
    } else if(tester instanceof RegExp){
        b = tester.test(str)
    } else if(Array.isArray(tester)) {
        b = tester.some(t => test_some_str(str, t));
    } else {
        b = false;
    }
    return b;
};

module.exports = test_some_str;