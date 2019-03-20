const { list, size, info } = require('./index');

const start = Date.now();
const path = './';
const option = {
    filters: [
        '*.js',
    ],
    ignores: [
    ],
    ignoreHidden: false
};

const r = list(path, option).sort((a,b)=>a.localeCompare(b));
const s = size(path, option);

const i = info(path, option);

r.forEach(rr => console.log(rr))
console.log(`${r.length} files ${s} byte ${Date.now() - start}ms`);
console.log(`info:`, i);