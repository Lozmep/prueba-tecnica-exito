import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service'
import { FormUtils } from 'src/app/utils/form-utils'

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  private fb = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)

  formUtils = FormUtils;

  authForm: FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  login() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched()
      return
    }

    const {user, password} = this.authForm.getRawValue()
    if (this.authService.login(user, password)) {
      this.router.navigate(['/gift-cards'])
      this.authForm.reset({
        user: '',
        password: '',
      })
    } else {
      alert('Usuario y/o contraseña incorrecta')
    }
  }
}
