import { Routes } from '@angular/router'
import { ExamplePageComponent } from './pages/example-page/example-page.component'
import { authGuard } from '@auth/guards/auth.guard'

export const gitfCardsRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'pool',
        component: ExamplePageComponent
      },
      {
        path: '**',
        redirectTo: 'pool'
      }
    ]
  }
]

export default gitfCardsRoutes
