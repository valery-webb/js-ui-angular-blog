requirejs.config({

    paths: {
        'angular': '../3p/angular',
        'angular-route': '../3p/angular-route',
        'angular-resource': '../3p/angular-resource',
        'domReady': '../3p/domReady'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        }

    },

    deps: [
        './bootstrap'
    ]
});
