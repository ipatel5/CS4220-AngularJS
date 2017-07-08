


 myApp.controller('signup', function($scope) {

    $scope.module=[]
     $scope.users=[]

     $scope.addmodule = function(){

            count = $scope.module.length +1;
             

            let num=0;
            let mname='';
            
            for(var k=0;k<$scope.module.length;k++)
            {
                if($scope.module[k].modulename.split(' ')[0]==$scope.modulename)
                {
                    num++;
                }}
             
            
                        for(var k=0;k<$scope.module.length;k++)
            {
                if($scope.module[k].modulename.split(' ')[0]==$scope.modulename)
                {
                if(num==1)
                {
                    $scope.module[k].modulename=$scope.module[k].modulename + ' Group- 1';
                    num++;
                    $scope.modulename=$scope.modulename + ' Group- '+num;
                }
                else
                {
                    num++;
                    $scope.modulename=$scope.modulename + ' Group- '+num;
                    
                }

            }

          
            }
  

  
            $scope.module.push({modulename:$scope.modulename,website:$scope.modulewebsite,id:count})
            $scope.modulename=null
            $scope.website=null


        }


       


          $scope.addstudent = function(){
            
            count1= $scope.users.length +1
            $scope.users.push({fname:$scope.fname,lname:$scope.lname,email:$scope.useremail,id:count1,mode:$scope.n_ame})
         console.log($scope.n_ame)
          /*  $scope.fname=null
            $scope.lname=null
            $scope.email=null*/
        
            


        }

                $scope.groupremove = function(module){

            for(var i = 0, moduleLength = $scope.module.length ; i < moduleLength ; i++){
            


        if($scope.module[i].id == module.id){


                    $scope.module.splice(i,1);

                    break;              
                }
            }
        };

$scope.studentremove = function(stud){

            for(var i = 0, userLength = $scope.users.length ; i < userLength ; i++){
                if($scope.users[i].id == stud.id){


                    $scope.users.splice(i,1);
                    break;              
                }

            }



        };




});

         

       