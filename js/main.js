'use strict';

$(document).foundation();

angular.module('hobbitHole', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/landing/landing.html',
    controller: 'landingCtrl'
  }).when('/skills', {
    templateUrl: '/templates/skills/skills.html',
    controller: 'skillsCtrl'
  }).when('/projects', {
    templateUrl: '/templates/projects/projects.html',
    controller: 'projectsCtrl'
  });
}).controller('landingCtrl', function ($scope) {}).controller('skillsCtrl', function () {}).controller('projectsCtrl', function () {});