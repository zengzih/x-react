const path = require('path');

const rv = (...a)=>path.resolve(__dirname, '../',...a);

module.exports = {
    root: rv('./'),
    dist: rv('dist'),
    src: rv('src'),
    common: rv('src/common'),
    components: rv('src/components'),
    layout: rv('src/layout'),
    node_modules: rv('node_modules'),
    semantic: rv('semantic'),
    view: rv('view'),
};
