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
  	$http.get("/Seom/mrc/get").then(function(res){
	  	$scope.malfunctions = res.data;
	  	$scope.totalItems = $scope.malfunctions.length;
	  })
  };
  
  $scope.table2 = function(){
  	$http.get("/Seom/irs/get").then(function(res){
	  	$scope.inspection = res.data;
	  	$scope.totalItems = $scope.inspection.length;
	  })
  };
  
  $scope.table3 = function(){
  	$http.get("/Seom/arc/get").then(function(res){
	  	$scope.laboratory = res.data;
	  	$scope.totalItems = $scope.laboratory.length;
	  })
  };
  
  $scope.table4 = function(){
  	$http.get("/Seom/tbc/get").then(function(res){
	  	$scope.adUnit = res.data;
	  	$scope.totalItems = $scope.adUnit.length;
	  })
  };
  
  $scope.table5 = function(){
  	$http.get("/Seom/pic/get").then(function(res){
	  	$scope.opUnit = res.data;
	  	$scope.totalItems = $scope.opUnit.length;
	  		  	
	  })
  };
  
  
  $scope.table6 = function(){
  	$http.get("/Seom/equipmentc/get").then(function(res){
	  	$scope.equipment = res.data;
	  	$scope.totalItems = $scope.equipment.length;
	  })
  };
  
  $scope.table7 = function(){
  	$http.get("/Seom/mmrc/get").then(function(res){
	  	$scope.monthly = res.data;
	  	$scope.totalItems = $scope.monthly.length;
	  })
  };
  
  $scope.table8 = function(){
  	$http.get("/Seom/msrc/get").then(function(res){
	  	$scope.jidu = res.data;
	  	$scope.totalItems = $scope.jidu.length;
	  })
  };
  
  $scope.table9 = function(){
  	$http.get("/Seom/aVillagec/get").then(function(res){
	  	$scope.vBasic = res.data;
	  	$scope.totalItems = $scope.vBasic.length;
	  })
  };
  
  $scope.table10 = function(){
  	$http.get("/Seom/avuvc/get").then(function(res){
	  	$scope.avuvc = res.data;
	  	$scope.totalItems = $scope.avuvc.length;
	  })
  };
  
  $scope.table11 = function(){
  	$http.get("/Seom/fc/get").then(function(res){
	  	$scope.fc = res.data;
	  	$scope.totalItems = $scope.fc.length;
	  })
  };
  
  $scope.table12 = function(){
  	$http.get("/Seom/fmsc/get").then(function(res){
	  	$scope.fmsc = res.data;
	  	$scope.totalItems = $scope.fmsc.length;
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

//$scope.edit = function(data){
//	console.log("edit",data);
//	$state.go("app.report_edit10",{data:JSON.stringify(data)});
//};




//审核
  $scope.verify1 = function(id,verify){
  	$http.post("/Seom/mrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify2 = function(id,verify){
  	$http.post("/Seom/irs/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify3 = function(id,verify){
  	$http.post("/Seom/arc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify4 = function(id,verify){
  	$http.post("/Seom/tbc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify5 = function(id,verify){
  	$http.post("/Seom/pic/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  		  	
	  })
  };
  
  
  $scope.verify6 = function(id,verify){
  	$http.post("/Seom/equipmentc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify7 = function(id,verify){
  	$http.post("/Seom/mmrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify8 = function(id,verify){
  	$http.post("/Seom/msrc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify9 = function(id,verify){
  	$http.post("/Seom/aVillagec/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify10 = function(id,verify){
  	$http.post("/Seom/avuvc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify11 = function(id,verify){
  	$http.post("/Seom/fc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };
  
  $scope.verify12 = function(id,verify){
  	$http.post("/Seom/fmsc/verify",{id:id,verify:verify}).then(function(res){
	  	swal(
			'审核成功',
			'',
			'success'
		);
	  })
  };




//删除
$scope.remove1 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table1();
	},function(err){
		
	})
}
$scope.remove2 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table2();
	},function(err){
		
	})
}
$scope.remove3 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table3();
	},function(err){
		
	})
}
$scope.remove4 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table4();
	},function(err){
		
	})
}
$scope.remove5 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table5();
	},function(err){
		
	})
}
$scope.remove6 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table6();
	},function(err){
		
	})
}
$scope.remove7 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table7();
	},function(err){
		
	})
}
$scope.remove8 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table8();
	},function(err){
		
	})
}

$scope.remove9 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table9();
	},function(err){
		
	})
}
$scope.remove10 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table10();
	},function(err){
		
	})
}
$scope.remove11 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table11();
	},function(err){
		
	})
}

$scope.remove12 = function(id){
	$http.post("22",{id:id}).then(function(res){
		$scope.table12();
	},function(err){
		
	})
}




}]);



App.controller("reportEditCtrl",["$scope","$state","$stateParams","$http",function($scope,$state,$stateParams,$http){
//	console.log(JSON.parse($stateParams.data));
//	$scope.data =JSON.parse($stateParams.data);
	$scope.data = $stateParams.data;
	console.log($stateParams.data);
	if(($state.current.name ==="app.report_edit4"||$state.current.name ==="app.report_edit9"|| $state.current.name ==="app.report_edit10")&&!$scope.data){
		$scope.data = {
			image:null,
		};
		//image	
		var input  = document.getElementById("image"); // input file
		input.onchange = function(){		
		    var file = this.files[0];
		        if(!!file){
		            var reader = new FileReader();
		            // 图片文件转换为base64
		            reader.readAsDataURL(file);
		            reader.onload = function(){
		                // 显示图片
		                document.getElementById("file_img").src = this.result;
		                $scope.data.image = this.result;
		        }
		    }
		}
	}
	
	
		//人员类别
		$scope.personCategories=[
			{id:1, name:"1-工作人员"},
			{id:2, name:"2-部门联系人"},
			{id:3, name:"3-部门负责人"},
			{id:4, name:"4-分管负责人"},
			{id:5, name:"5-单位负责人"},
			{id:6, name:"6-投诉受理人"}
		];
	  	//纳厂信息
	  	$scope.plants = [
	  		{id:1, name:"1-全部纳厂"}, {id:2, name:"2-全部非纳厂"}, {id:3, name:"3-部分纳厂"}
	  	];
	  	//设施建设
	  	$scope.facilities = [
	  		{id:1, name:"1-未建（农污）"}, {id:2, name:"2-全部建（农污）"}, {id:3, name:"3-部分建（农污）"}
	  	];
	  	//设施状态
	  	$scope.facilitieStatus = [
	  		{id:1, name:"1-建设"}, {id:2, name:"2-运维"}, {id:3, name:"3-大修"}, {id:4, name:"4-重建"}, {id:5, name:"5-报废"}
	  	];
	  	//监测监控
	  	$scope.monitor = [{id:1, name:"1-是 "},{id:2, name:"2-否"}];
	  	//监督员级别
	  	$scope.supervisorLevels = [{id:1, name:"1-村"}, {id:2, name:"2-镇"}, {id:3, name:"3-县（区、市）"}];
	  	//设备类型
	  	$scope.equipmentYypes = [{id:1, name:"1-土建"}, {id:2, name:"2-机电"}, {id:3, name:"3-监测"}, {id:4, name:"4-监控"}, {id:0, name:"0-其他"}];
	
	
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
	
	
	
	
	
	
	
	
    
    	$scope.update1 = function(){
    		$http.post("/Seom/mrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    			
    		},function(err){
    			swal(				  
				  err.data,
				  '',
				  'error'
				)
    		});
    	};
    	
    	$scope.update2 = function(){
    		$http.post("/Seom/irs/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update3 = function(){
    		$http.post("/Seom/arc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update4 = function(){
    		$http.post("/Seom/tbc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update5 = function(){
    		console.log($scope.data);
    		$http.post("/Seom/pic/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update6 = function(){
    		$http.post("/Seom/equipmentc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update7 = function(){
    		$http.post("/Seom/mmrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update8 = function(){
    		$http.post("/msrc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update9 = function(){
    		$http.post("/Seom/aVillagec/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update10 = function(){
    		$http.post("/Seom/avuvc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update11 = function(){
    		$http.post("/Seom/fc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    	
    	$scope.update12 = function(){
    		$http.post("/Seom/fmsc/post",{data:$scope.data}).then(function(res){
    			if(res.data==="true"){
    				swal(
					  '保存成功',
					  '',
					  'success'
					);
    			}else if(res.data==="false"){
    				swal(
					  '程序错误',
					  '',
					  'error'
					)
    			}else{
    				swal(
					  res.data,
					  '',
					  'error'
					)
    			}
    		},function(err){
    			swal(
				  '保存失败',
				  err.data,
				  'error'
				)
    		});
    	};
    
    
}])







App.controller("PaginationCtrl",["$scope",function($scope){
//	$scope.maxSize = 5;
//  $scope.totalItems = 175;
    
}])