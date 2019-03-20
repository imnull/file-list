const { list } = require('./index');

const start = Date.now();

const r = list('./', {
    filters: [
        '*.js',
    ],
    ignores: [
    ],
    ignoreHidden: false
}).sort((a,b)=>a.localeCompare(b));

r.forEach(rr => console.log(rr))
console.log(`${r.length} files ${Date.now() - start}ms`)