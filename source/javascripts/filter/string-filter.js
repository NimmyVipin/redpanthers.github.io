var RedPanthers = window.RedPanther || angular.module('redpanthers',[])
RedPanthers.filter('returnFirstLetter',function(){
	return function(input){
		if(typeof input == "undefined"){
			return "";
		}else{
			return input.charAt(0).toUpperCase();
		}
	};
})