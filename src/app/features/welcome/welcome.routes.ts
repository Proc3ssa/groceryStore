import { Routes } from '@angular/router';
import { WelcComponent } from './welc/welc.component';
import { WalkthroughComponent } from './walkthrough/walkthrough.component';

export const welcomeroutes: Routes = [
    {
        path: '', component: WelcComponent
    },

    {
        path: "walkthrough", component: WalkthroughComponent
    }

];
