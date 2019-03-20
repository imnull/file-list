const fill_path = require('./utiles/fill-path');

module.exports = (path, option = {}) => {
    if(!option || typeof(option) !== 'object'){
        option = {};
    }
    let {
        ignores = [], filters = [], ignoreNames = [],
        encoding = 'utf-8',
        ignoreHidden = true
    } = option;

    let r = [];

    if(!Array.isArray(ignores)){
        ignores = [ignores];
    }

    if(ignoreHidden){
        ignoreNames = [/^\./, /node_modules/i, ...ignoreNames];
    }

    if(!Array.isArray(filters)){
        filters = [filters];
    }

    let segs = path.split('/');
    let name = segs.pop();
    while(!name && segs.length > 0){
        name = segs.pop();
    };

    fill_path(path, name, { ...option, ignores, filters, encoding, ignoreNames }, r);
    return r;
}