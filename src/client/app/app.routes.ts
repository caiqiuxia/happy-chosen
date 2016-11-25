import { Routes } from '@angular/router';

import { IntroRoutes } from './intro/index';
import { GameRoutes } from './game/index';

export const routes: Routes = [
  ...IntroRoutes,
  ...GameRoutes
];
