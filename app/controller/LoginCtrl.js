angular.module('chat').controller('LoginCtrl',function($scope,$http,$location){
    $scope.login = function(){
        $http({
            url:'/user/login',
            method:'post',
            data:{email:$scope.email}
        }).success(function(user){
            //如果登陆成功，则把路径切换到/rooms下面
            $scope.$emit('login',user);
            $location.path('/rooms');
        }).error(function(data){
             console.log(data);
            $location.path('/login');
        })
    }
});