var app = angular.module('app');

app.factory('modalService', function($mdDialog, $window, $state) {
   
   function showAlert(title, content) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(false)
            .title(title)
            .textContent(content)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        ).finally(function() {
            $state.reload();
        });
    }

    return {
        showAlert: showAlert
    }
});