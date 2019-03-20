const file_list = require('./index');

const start = Date.now();

const r = file_list('/Users/mk/git/MINIP', {
    filters: [
        // '*.css',
    ],
    ignores: [
        // /sn-wxminip-components/
    ],
    ignoreHidden: false
}).sort((a,b)=>a.localeCompare(b));

r.forEach(rr => console.log(rr))
console.log(`${r.length} files ${Date.now() - start}ms`)
// console.log(Date.now() - start)