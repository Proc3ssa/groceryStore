import { Routes } from '@angular/router';
import { welcomeroutes } from './features/welcome/welcome.routes';

export const routes: Routes = [
    {
        path: '',
        children: welcomeroutes
    }

];
