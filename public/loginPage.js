'use strict'
const formUser = new UserForm();
   
formUser.loginFormCallback = data => 
   ApiConnector.login(data, (response) =>{
      if(response.success){
         location.reload();
   }else{
      formUser.setLoginErrorMessage(response.error);
      }
   });

   formUser.registerFormCallback = data => 
   ApiConnector.register(data, (response) =>{
      if(response.success){
         location.reload();
   }else{
      formUser.setRegisterErrorMessage(response.error);
      }
   });