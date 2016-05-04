// allows us to open a ui bootstrap modal
// using the $uibModal service from ui bootstrap
app.directive('myModal', [function() {

  return {
    templateUrl: '/directives/myModal.html',
    controller: ['$scope', '$uibModal', function($scope, $uibModal) {


      // opens our modal on ng-click!
      $scope.openModal = function() {

        // create a new modal with the following settings
        var modalInstance = $uibModal.open({
          animation: true, // animate show/hide
          // use this template
          templateUrl: '/modals/myContactInstance.html',
          // use this controller (src: /modals/myModalInstance.js)
          controller: 'myContactInstance',
          // prevent dismissing by clicking on backdrop
          backdrop: 'true',
          // make our modal large
          size: 'lg',
          resolve: {
            customer: function() {

              return $scope.customer;
            }
          }
        });
        modalInstance.result.then(
          // "done" (user said OK)
          function (data) {

              console.log(data.name, data.adress, data.zipCode, data.city, data.phone, data.email);

            // selected option is sent to us from the modal controller
            // ($uibModalInstance.close($scope.selectedOption))
          }, function () {
            // "fail" (user said cancel)
            // the modal controller did not send us anything
            // ($uibModalInstance.dismiss())
            console.log('Modal dismissed at: ' + new Date());
          }
        );
      };
    }]
  };
}]);