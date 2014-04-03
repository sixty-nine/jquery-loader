var SixtyNine = SixtyNine || {};

SixtyNine.jQueryLoader = (function () {

    var jQueryUrl = "http://code.jquery.com/jquery-latest.min.js ";

    return {

        /**
         * Create a Javascript script html node
         * @param src The URL of the source of the script
         * @returns {*}
         */
        getScriptTag: function (src) {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = src;
            return script;
        },

        /**
         * Insert a script tag in the head of the document
         * @param script The script html node
         */
        loadScript: function (script) {
            document.getElementsByTagName('head')[0].appendChild(script);
        },

        /**
         * Load jQuery if it has not yet been loaded
         */
        loadJQuery: function (callback) {
            if (typeof jQuery == 'undefined') {
                this.loadScript(this.getScriptTag(jQueryUrl));
            }
            this.waitForJQuery(callback);
        },

        /**
         * Wait until jquery is loaded and then call the callback function
         * @param callback The callback function
         */
        waitForJQuery: function (callback) {
            if (typeof jQuery == 'undefined'){
                setTimeout(function () { SixtyNine.jQueryLoader.waitForJQuery(callback) }, 50);
            } else {
                callback();
            }
        }

    };

})();

