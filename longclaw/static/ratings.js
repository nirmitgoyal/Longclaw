$('#ratings').addClass("active item");

$('#table').DataTable();

linebreak = document.createElement("br");
table_filter.appendChild(linebreak);
linebreak = document.createElement("br");
table_filter.appendChild(linebreak);

// var TextInside = ctrl.getElementsByTagName('label')[0].innerHTML;
var TextInside = $( "label" ).text();
console.log(TextInside);
TextInside.bold();
// alert("af");
// document.getElementById(table_filter).style.fontWeight = 'bold';

var app = angular.module('knuth', []);
app.controller('ratingssCtrl', function($scope, $http) {
    $http.get("url")
    .then(function (response) {$scope.students = response.data.array;});
});