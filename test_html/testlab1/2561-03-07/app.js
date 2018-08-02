/**
From stack overflow 
 https://stackoverflow.com/questions/28387912/code-organization-angularjs-huge-controller
**/
var app = angular.module('myApp',[]);

app.controller('subCtrl', function($scope){
   $scope.test3 = function(){
     //code
     return "fn: test3 A ";
   };
   $scope.test4 = function(){
     //code
     return "fn: test4  A ";
   };
});

/** @description
 *      inherit / inject  controller A to Controller B
 *      can use function in A in B  
 */
app.controller('ParentCtrl', function($scope, $controller){
   //injecting subCtrl scope inside ParentCtrl
   $controller('subCtrl', {$scope: $scope});
   //after this line method and $scope variables of subCtrl will be available.
   $scope.test = function(){
     //code
     return "fn: test B ";
   };
   $scope.test2 = function($scope){
     //code
     return "fn: test2 B ";
   };
});