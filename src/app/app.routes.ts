import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
