#SixtyNine jQuery Loader

A simple library to load the latest version of jQuery via a Javascript call.

## Usage

This script will load the latest version of jQuery and then call a callback function. If jQuery is already loaded the script will just execute the callback.


```
  <script type="text/javascript" src="jquery-loader.js"></script>
  <script type="text/javascript">

    SixtyNine.jQueryLoader.loadJQuery(function () {

      // Here you are sure that jQuery is loaded

    });

  </script>
```
