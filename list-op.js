const { info } = require('./toolkits');
const tester = require('./utiles/test-some-str');

class ListOperator {
    constructor(path, option = {}){
        this.info = info(path, option);
    }

    filter(...filters){
        if(filters.length < 1){
            return [...this.info.files];
        }
        return this.info.files.filter(file => {
            if(/([^\/]+)$/.test(file)){
                let name = RegExp.$1;
                return tester(name, filters);
            }
            return false
        })
    }
}

module.exports = ListOperator;