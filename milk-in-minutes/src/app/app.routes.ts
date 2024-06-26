import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './services/authentication.service';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'header', component: HeaderComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path: 'home', component: HomeComponent},
    { path: 'cart', component: CartComponent, canActivate:[loginGuard] },
    { path: 'orders', component: OrdersComponent, canActivate:[loginGuard] },
    //{ path: '**', component: PageNotFoundComponent},
];
