var app = angular.module("tdvfApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        template : "<iframe src='html/home.html' style='border:none' width=100% scrolling='no' onload='resizeIframe(this)'></iframe>"
    })
    .when("/events", {
        template : "<iframe src='html/Events.html' style='border:none' width=100% scrolling='no' onload='resizeIframe(this)'></iframe>"
    })
	.otherwise("/home");
});


  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }