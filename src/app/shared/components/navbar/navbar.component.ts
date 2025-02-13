import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { AuthService } from '@auth/services/auth.service'

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isMenuOpen = signal<boolean>(false)

  private authService = inject(AuthService)
  private router = inject(Router)

  changeVisibility() {
    this.isMenuOpen.update(option => !option)
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/auth/login'])
  }
}
