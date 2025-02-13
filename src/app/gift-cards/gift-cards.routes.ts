import { Routes } from '@angular/router'
import { authGuard } from '@auth/guards/auth.guard'
import { GiftCardsPageComponent } from './pages/gift-cards-page/gift-cards-page.component'
import { GiftCardLayoutComponent } from './layouts/gift-card-layout/gift-card-layout.component'
import { GiftCardAddPageComponent } from './pages/gift-card-add-page/gift-card-add-page.component'

export const gitfCardsRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: GiftCardLayoutComponent,
    children: [
      {
        path: 'list',
        component: GiftCardsPageComponent
      },
      {
        path: 'add',
        component: GiftCardAddPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

export default gitfCardsRoutes
