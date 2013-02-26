// Set the require.js configuration for your application.
require.config({

    deps: ['main'],

    paths: {
        jquery: '/assets/vendor/jquery',
        jqueryxdr: '/assets/vendor/jquery.xdr',
        jquerymockjax: '/assets/vendor/jquery.mockjax',
        lodash: '/assets/vendor/lodash',
        backbone: '/assets/vendor/backbone',
        css: '/assets/vendor/require-css',
        modernizr: '/assets/vendor/modernizr',
        moment: '/assets/vendor/moment',
        tpl: '/assets/vendor/tpl',
        d3: '/assets/vendor/d3.v3',
    },

    shim: {
        backbone: {
            deps: ['lodash', 'jquery', 'jqueryxdr', 'jquerymockjax'],
            exports: 'Backbone'
        },

        modernizr: {
            exports: 'Modernizr'
        },

        moment: {
            exports: 'Moment'
        },

        jqueryxdr: {
            deps: ['jquery']
        },

        jquerymockjax: {
            deps: ['jquery']
        },

        d3: {
            exports: 'd3'
        }
    }

});