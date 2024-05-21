import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const companyAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router=inject(Router)

  if(authService.isAuthenticatedCompany=="true"){
    console.log("hello")
    return true
  }else{
    router.navigate(['/login']);
    return false
  }
};
