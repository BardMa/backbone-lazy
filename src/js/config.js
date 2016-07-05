requirejs.config({
    //urlArgs: 'rand=' + (new Date()).getTime(), // for development
    baseUrl: 'src/js',
    paths: {
        text: 'libs/text',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        doT: 'libs/doT',
        jquery: 'libs/jquery',
        fastclick: 'libs/fastclick'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});