
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [

    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const Routing = RouterModule.forRoot(appRoutes);

