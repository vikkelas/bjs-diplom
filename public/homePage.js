'use strict'
const logout = new LogoutButton();

logout.action = () => ApiConnector.logout((response) => {
   if(response.success) {
      location.reload()
   }
});

ApiConnector.current((check)=>{
   if(check.success===true){
      ProfileWidget.showProfile(check.data)
   }
})

const rates = new RatesBoard();
function currency(){
   ApiConnector.getStocks((name)=>{
      if(name.success){
         rates.clearTable();
         rates.fillTable(name.data)
      }
   })
}
setInterval(currency(), 60000);

const userMoney = new MoneyManager();

userMoney.addMoneyCallback = data=>
   ApiConnector.addMoney(data, (check)=>{
      if(check.success){
         ProfileWidget.showProfile(check.data);
         userMoney.setMessage(check.success, 'Операция выполнена');
      } else {
         userMoney.setMessage(check.success, check.error);
      }
   });

userMoney.conversionMoneyCallback = (money)=> {
   ApiConnector.convertMoney(money,(check)=>{
      if(check.success){
         ProfileWidget.showProfile(check.data);
         userMoney.setMessage(check.success, 'Операция выполнена');
      } else {
         userMoney.setMessage(check.success, check.error);
      }
   })
}

userMoney.sendMoneyCallback = (money)=>{
   ApiConnector.transferMoney(money,(check)=>{
      if(check.success){
         ProfileWidget.showProfile(check.data);
         userMoney.setMessage(check.success, 'Операция выполнена');
      } else {
         userMoney.setMessage(check.success, check.error);
      }
   })
}

 const favoritUser = new FavoritesWidget();

 ApiConnector.getFavorites(check =>{
    if(check.success){
      favoritUser.clearTable(); 
      favoritUser.fillTable(check.data);
      userMoney.updateUsersList(check.data);
    }
 })

favoritUser.addUserCallback = (user)=>{
   ApiConnector.addUserToFavorites(user,check=>{
      if(check.success){
         favoritUser.clearTable(); 
         favoritUser.fillTable(check.data);
         userMoney.updateUsersList(check.data);
         userMoney.setMessage(check.success,"Пользователь добавлен")
      } else {
         userMoney.setMessage(check.success, check.error);
      }
   });
}

favoritUser.removeUserCallback = (id)=>{
   ApiConnector.removeUserFromFavorites(id,check=>{
      if(check.success){
         favoritUser.clearTable(); 
         favoritUser.fillTable(check.data);
         userMoney.updateUsersList(check.data);
         userMoney.setMessage(check.success,"Пользователь удален")
      } else {
         userMoney.setMessage(check.success, check.error);
      }
   });
}