requirejs.config({

    paths: {
        'angular': '../3p/angular',
        'angular-route': '../3p/angular-route',
        'domReady': '../3p/domReady'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        './bootstrap'
    ]
});
