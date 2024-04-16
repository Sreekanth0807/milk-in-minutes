import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn(): boolean {
    // Your existing logic to determine logged-in status
    return true; // Replace with your actual check
}

logout() {
    // Your existing logic to log out a user
}

// CanActivate implementation
// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.isLoggedIn()) {
//         return true; // Allow access if logged in
//     } else {
//         this.router.navigate(['/login']); // Redirect to login if not
//         return false;
//     }
// }

// // CanDeactivate implementation (example for cart component)
// canDeactivate(component: any, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     if (component.hasUnsavedCartChanges()) { 
//        return confirm('You have unsaved cart changes. Are you sure you want to leave?');
//     }
//     return true;
// }
}
