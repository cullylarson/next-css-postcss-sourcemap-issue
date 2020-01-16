const path = require('path')
const createResolver = require('postcss-import-webpack-resolver')

module.exports = ctx => ({
    map: true,
    plugins: {
        'postcss-import': {
            resolve: createResolver({
                alias: {
                    '@css': path.resolve(__dirname, 'client/style'),
                    '@client': path.resolve(__dirname, 'client'),
                },
            }),
        },
        'postcss-rem': {
            baseline: 16,
            fallback: false,
            precision: 5,
        },
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-custom-media': {},
        'postcss-calc': {mediaQueries: true},
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 2 versions',
        },
        'cssnano': {
            zindex: false,
            // autoprefixer is included in postcss-preset-env, so no need to do it again in nano
            autoprefixer: false,
            discardComments: {removeAll: true}
        },
        'postcss-reporter': {clearReportedMessages: true},
    }
})
