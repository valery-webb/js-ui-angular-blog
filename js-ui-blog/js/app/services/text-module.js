define(['./module'], function (services) {

    'use strict';

    return services.factory('textModule', function () {

        // private
        var START_POINT = 0,
            MAX_LENGTH = 100,
            lastWordRegEx = /\s+\S*$/,
            hellip = '\u2026';

        //public
        return {
            cutBy100: function (str) {

                if (str.length >= MAX_LENGTH) {
                    str = str.substring(START_POINT, MAX_LENGTH);
                    return str.replace(lastWordRegEx, hellip);
                } else {
                    return str;
                }
            }
        }

    });
});
