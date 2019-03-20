const FS = require('fs');
const PATH = require('path');
const test_some_str = require('./test-some-str');

const fill_path = (path, name, option, r) => {

    if(!FS.existsSync(path)){
        return;
    }
    
    let stat = FS.statSync(path);
    if(stat.isFile()){
        let { ignores = [], filters = [] } = option;

        if(ignores.length > 0 && (test_some_str(name, ignores))){
            return;
        }
        if(filters.length < 1 || test_some_str(name, filters)){
            r.push(path);
        }
       
    } else if(stat.isDirectory()){
        let { encoding = 'utf-8', ignoreNames = [] } = option;
        let files = FS.readdirSync(path, { encoding });
        if(ignoreNames.length > 0){
            files = files.filter(name => !test_some_str(name, ignoreNames))
        }
        files.forEach(name => {
            let p = PATH.resolve(path, name);
            fill_path(p, name, option, r);
        })
    }
};

module.exports = fill_path;