import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let isLoggedIn = sessionStorage.getItem("isLoggedin");

  if(isLoggedIn == 'false'){
    alert("please Login")
    return false;
  }else{

    return true;
  }
};
