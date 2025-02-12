import { Routes } from '@angular/router'
import { LoginPageComponent } from './pages/login-page/login-page.component'

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: LoginPageComponent
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  }
]

export default authRoutes
