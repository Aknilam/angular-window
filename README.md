# angular-window

Move window events to angular.

## Install

You can install this package with `bower`.

### bower

```shell
bower install angular-window
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-window/window.js"></script>
```

Then add `ngWindow` as a dependency for your app:

```javascript
angular.module('myApp', ['ngWindow']);
```

## Documentation

Add to dependencies:

```javascript
angular.controller('myController', ['$scope', 'ngWindow', function($scope, ngWindow) {
  ...
}]);
```

bind and unbind on change event:

```javascript
var onChange = function(width, height) {
  var i = 10;
  $scope.value = width + i * height;
};
ngWindow.bind(onChange);
...
ngWindow.unbind(onChange);
```

or through Angular event:

```javascript
$scope.$on('$windowResized', function(data) {
  $scope.value = data.width + data.height;
});
```

use directly through $rootScope:

```html
<div ng-style="{'width': $root.size.width / 2}">...</div>
```

## License

The MIT License

Copyright (c) 2015 Michał Malinka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
