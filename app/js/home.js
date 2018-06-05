//登录页

angular.module("sewageHome",[]).controller("accountCtrl",["$rootScope","$scope" ,"$http",function($rootScope,$scope,$http){
	var account = this;
	account.remember = false;	
	if(localStorage.sewage_user){
		account.user = localStorage.sewage_user;
	}
	
	account.login = function(){
		$http.post("/Seom/userC/login",{user:account.user,password:account.password}).then(function(res){
			window.location.href = "admin.html";
		},function(err){
			$scope.errMes = err.data;
			console.log($scope.errMes);
		});
		
		
		
		if(account.remember){
			localStorage.sewage_user= account.user;
		}
	}
	
	
	var newsMarquee = document.getElementById("news");
	angular.element(newsMarquee).kxbdMarquee({direction:"up",isEqual:false,scrollDelay:40});
	
	
}])
