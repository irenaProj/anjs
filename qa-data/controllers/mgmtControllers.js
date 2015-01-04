angular.module("qa")
    .constant("dataUrl", "https://amber-heat-6599.firebaseio.com/qa")
    .controller("authCtrl", function($scope, $location, dataUrl, $firebase) {

        var ref = new Firebase(dataUrl);
        var authData = ref.getAuth();

        if (authData) {
            // Go straiht to the secured page
            $location.path("/qaMgmt");
        }

        $scope.authenticate = function(email, pwd) {

            // Authenticate user
            ref.authWithPassword({
                    email    : email,
                    password : pwd
                }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    $location.path("/qaMgmt");
                }
            });
        }

        $scope.unauthenticate = function() {
            ref.unauth();

            // Go to tickets list
            $scope.setTicketsMgmtActive(false);
            $location.path("/qa");
        }
    });