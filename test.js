const { list, size, info, create } = require('./index');

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

let op = create(path, option);

r.forEach(rr => console.log(rr));
console.log(`${r.length} files ${s} byte ${Date.now() - start}ms`);
console.log(`info:`, i);
console.log(`operator:`, op);
console.log(`operator.filter('list*'): `, op.filter('list*'));
console.log(`operator.filter('t*.js'): `, op.filter('t*.js'));
console.log(`operator.filter('?????.js'): `, op.filter('?????.js'));