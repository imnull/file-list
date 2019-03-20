const FS = require('fs');
const fill_path = require('./utiles/fill-path');

const list = (path, option = {}) => {
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
};

const getFilesSize = (files) => files.reduce((a, file) => a + FS.statSync(file).size, 0);

const size = (path, option = {}) => getFilesSize(list(path, option));

const info = (path, option = {}) => {
    let files = list(path, option);
    let size = getFilesSize(files);
    return { files, size };
};

module.exports = {
    list,
    size,
    info,
    getFilesSize
};