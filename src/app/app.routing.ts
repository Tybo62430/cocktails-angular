import { Route, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';

const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'panier', component: PanierComponent },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
