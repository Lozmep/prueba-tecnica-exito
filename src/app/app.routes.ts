import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'gift-cards',
    loadChildren: () => import('./gift-cards/gift-cards.routes')
  },
  {
    path: '**',
    redirectTo: 'gift-cards'
  }
]
