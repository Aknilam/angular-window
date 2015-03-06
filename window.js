(function() {
  'use strict';
  angular.module('ngWindow', []).

  factory('ngWindow', [
    '$rootScope',
    '$window',
    function($rootScope, $window) {
      $rootScope.size = {
        width: $window.innerWidth,
        height: $window.innerHeight
      };

      $($window).on('resize', function(e) {
        $rootScope.$apply(function() {
          var width = e.target.innerWidth,
            height = e.target.innerHeight;

          $rootScope.size.width = width;
          $rootScope.size.height = height;
          notify(width, height);
          $rootScope.$broadcast('$windowResized', angular.copy({}, $rootScope.size, {event: e}));
        });
      });

      var notifications = [];

      var bindCallback  = function(callback) {
        notifications.push(callback);
      };

      var notify = function(width, height) {
        angular.forEach(notifications, function(action) {
          action(width, height);
        });
      };

      return {
        bind: bindCallback
      };
    }
  ]);

})();
