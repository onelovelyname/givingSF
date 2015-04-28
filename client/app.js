var app = angular.module('givingSF', []);

app.controller('ImpactController', [$scope, function( $scope ) {
	var impacts = [];
	$scope.impact = {};
	$scope.addImpact = function () {
		console.log('Ran addImpact()');
		impacts.push({
			impactNumber: $scope.impact.number,
			impactText: $scope.impact.text
		});
		console.log(impacts);
	};
}]);