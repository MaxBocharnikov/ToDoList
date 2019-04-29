'use strict';
(function () {
    var Code = {
        enter : 13
    }

    window.isEnterCode = function (keycode) {
        if (keycode === Code.enter) return true;

        return false;
    };


})();