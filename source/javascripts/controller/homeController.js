var RedPanthers = window.RedPanthers || angular.module('redpanthers',[]);
RedPanthers.controller('homeController',['$scope','$rootScope','githubApis','cfpLoadingBar',function($scope,$rootScope,githubApis,cfpLoadingBar){
  $scope.title = "Redpanther IO";
  $scope.getCategoryList = []

	$scope.getProjects = []
	githubApis.getAllRepository().query(function(values){
    $scope.getProjects = values
    $scope.getProjects.map(function(values,index){
      if(values.language != null && $scope.getCategoryList.indexOf(values.language) == - 1){
          $scope.getCategoryList.push(values.language)
      }
    })
	})
  $rootScope.$on('cfpLoadingBar:completed',function(result){
   $('body').removeClass("white-class")
  })
  $rootScope.$on('cfpLoadingBar:started',function(){
    $('body').addClass("white-class")
  })
}])
