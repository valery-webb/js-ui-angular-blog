var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'angular': '../js-ui-blog/js/3p/angular',
        'angular-route': '../js-ui-blog/js/3p/angular-route',
        'angular-resource': '../js-ui-blog/js/3p/angular-resource',
        'domReady': '../js-ui-blog/js/3p/domReady'
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

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});