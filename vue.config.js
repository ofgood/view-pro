const path  = require('path');
module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/css/config.less")] // 引入全局样式变量
        }
    }
}
