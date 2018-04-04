//登录页

angular.module("sewageHome",[]).controller("accountCtrl",["$rootScope","$scope" ,function($rootScope,$scope){
	var account = this;
	account.remember = false;	
	if(localStorage.sewage_user){
		account.user = localStorage.sewage_user;
	}
	
	account.login = function(){
		window.location.href = "admin.html";
		if(account.remember){
			localStorage.sewage_user= account.user;
		}
	}
	
	
	var newsMarquee = document.getElementById("news");
	angular.element(newsMarquee).kxbdMarquee({direction:"up",isEqual:false,scrollDelay:40});
	
	
}])
