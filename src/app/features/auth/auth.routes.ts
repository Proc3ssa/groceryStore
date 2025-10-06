import { Routes } from '@angular/router';
import { AccountTypeComponent } from './account-type/account-type.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
export const authRoute: Routes = [
    {
        path: 'account-type', component: AccountTypeComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'login', component: LoginComponent
    }

    

];
