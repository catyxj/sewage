/**=========================================================
 * Module: 
 * Angular controller
 =========================================================*/

App.controller('reportController', ['$scope', '$http','$state',
  function($scope, $http,$state ) {
  'use strict';



	$scope.my_tree_handler = function(branch) {
		$scope.output = branch.data.description;
	//  return $scope.output;
		$state.go($scope.output);
  	};

  // onSelect event handlers
  var apple_selected = function(branch) {
    
  };

  var treedata_avm = [
    {
      label: '运维记录',
      children: [
        {
          label: '故障报表',
		  data: {
            description: "app.report.table1"
         }
        }, {
          label: '巡检报表',
          data: {
            description: "app.report.table2"
          }
        }, {
          label: '化验报表',
          data: {
            description: "app.report.table3"
          }
        },
        {
          label: '运维月报表',
          data: {
            description: "app.report.table7"
          }
        },
        {
          label: '运维季报表',
          data: {
            description: "app.report.table8"
          }
        }
      ]
    }, {
      label: '行政机构',      
      children: [
        {
          label: '镇基本信息表',
          data: {
	        description: "app.report.table4"
	      }
        }, {
          label: '镇工作人员信息表',
          data: {
	        description: "app.report.table5"
	      }
        },
        {
          label: '行政村基本信息表',
          data: {
	        description: "app.report.table9"
	      }
        },
        {
          label: '自然村信息表',
          data: {
	        description: "app.report.table10"
	      }
        }
      ]
    }, {
      label: '设备相关',
      children: [
     	
        {
          label: '设施基本信息表',
          data: {
	        description: "app.report.table11"
	      }
        },
        {
          label: '设施监督员关联表',
          data: {
	        description: "app.report.table12"
	      }
        },
        {
          label: '设施设备信息表',
          data: {
	        description: "app.report.table6"
	      }
        }
      ]
    }
  ];
  

  $scope.my_data = treedata_avm;

  


		




  // Ajax 
  $scope.table1 = function(){
  	$http.get("server/malfunctions.json").then(function(res){
	  	$scope.malfunctions = res.data;
	  	$scope.totalItems = $scope.malfunctions.length;
	  })
  };
  
  $scope.table2 = function(){
  	$http.get("server/inspection.json").then(function(res){
	  	$scope.inspection = res.data;
	  	$scope.totalItems = $scope.inspection.length;
	  })
  };
  
  $scope.table3 = function(){
  	$http.get("server/laboratory.json").then(function(res){
	  	$scope.laboratory = res.data;
	  	$scope.totalItems = $scope.laboratory.length;
	  })
  };
  
  $scope.table4 = function(){
  	$http.get("server/town-basic.json").then(function(res){
	  	$scope.adUnit = res.data;
	  	$scope.totalItems = $scope.adUnit.length;
	  })
  };
  
  $scope.table5 = function(){
  	$http.get("server/town-worker.json").then(function(res){
	  	$scope.opUnit = res.data;
	  	$scope.totalItems = $scope.opUnit.length;
	  		  	
	  })
  };
  
  
  $scope.table6 = function(){
  	$http.get("server/equipment.json").then(function(res){
	  	$scope.equipment = res.data;
	  	$scope.totalItems = $scope.equipment.length;
	  })
  };
  
  $scope.table7 = function(){
  	$http.get("server/monthlyreport.json").then(function(res){
	  	$scope.monthly = res.data;
	  	$scope.totalItems = $scope.monthly.length;
	  })
  };
  
  $scope.table8 = function(){
  	$http.get("server/quarterlyreport.json").then(function(res){
	  	$scope.jidu = res.data;
	  	$scope.totalItems = $scope.jidu.length;
	  })
  };
  
  $scope.table9 = function(){
  	$http.get("server/village-basic.json").then(function(res){
	  	$scope.vBasic = res.data;
	  	$scope.totalItems = $scope.vBasic.length;
	  })
  };
  
  
$scope.pages=[5,10,25];
$scope.currentPage = 1;
$scope.itemsPerPage = 10;
$scope.selectPage = function(page){
	$scope.currentPage = page;
};
$scope.changePageSize = function(page){
	$scope.itemsPerPage = page;
}

$scope.edit = function(data){
	console.log("edit",data);
	$state.go("app.report_edit10",{data:JSON.stringify(data)});
};


}]);



App.controller("reportEditCtrl",["$scope","$stateParams",function($scope,$stateParams){
//	console.log(JSON.parse($stateParams.data));
//	$scope.data =JSON.parse($stateParams.data);
	$scope.data = $stateParams.data;
	
		//人员类别
		$scope.personCategories=["1-工作人员","2-部门联系人","3-部门负责人","4-分管负责人","5-单位负责人","6-投诉受理人"];
	  	//纳厂信息
	  	$scope.plants = ["1-全部纳厂", "2-全部非纳厂", "3-部分纳厂"];
	  	//设施建设
	  	$scope.facilities = ["1-未建（农污）", "2-全部建（农污）", "3-部分建（农污）"];
	  	//设施状态
	  	$scope.facilitieStatus = ["1-建设", "2-运维", "3-大修", "4-重建", "5-报废"];
	  	//监测监控
	  	$scope.monitor = ["1-是 ","2-否"];
	  	//监督员级别
	  	$scope.supervisorLevels = ["1-村", "2-镇", "3-县（区、市）"];
	  	//设备类型
	  	$scope.equipmentYypes = ["1-土建", "2-机电", "3-监测", "4-监控", "0-其他"];
	
	
	//datepicker
		$scope.dat = new Date();
        $scope.format = "yyyy/MM/dd";
        $scope.altInputFormats = ['yyyy/M!/d!'];
 
        $scope.popup1 = {
            opened: false
            };
       	$scope.open1 = function () {
            $scope.popup1.opened = true;
        };
             
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        
        $scope.popup3 = {
            opened: false
        };
        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };
	
	
    
}])







App.controller("PaginationCtrl",["$scope",function($scope){
//	$scope.maxSize = 5;
//  $scope.totalItems = 175;
    
}])