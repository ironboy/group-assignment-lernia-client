app.controller("forsale", ["$scope", "property", function($scope, property) {
	property.create(function(data){

		url: "/api/property",
		data: {
			
		}	
		
	})
}]);