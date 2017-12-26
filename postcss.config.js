const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: {
        'autoprefixer': { browsers: ['last 3 versions', 'IE 10', 'IE 11', 'iOS >= 8'] }
    }
}