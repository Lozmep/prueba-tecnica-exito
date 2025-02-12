import { Routes } from '@angular/router'
import { ExamplePageComponent } from './pages/example-page/example-page.component'

export const gitfCardsRoutes: Routes = [
  {
    path: '',
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
