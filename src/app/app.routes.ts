import { Routes } from '@angular/router';
import { welcomeroutes } from './features/welcome/welcome.routes';
import { authRoute } from './features/auth/auth.routes';
export const routes: Routes = [
    {
        path: '',
        children: welcomeroutes
    },

    {
        path: 'auth',
        children: authRoute
    }

];
