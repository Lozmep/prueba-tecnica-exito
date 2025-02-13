import { Injectable } from '@angular/core'
import { LoginResponse } from '@auth/interfaces/login-response.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = ''

  login(username: string, password: string): LoginResponse {
    if (username === 'admin' && password === 'admin123') {
      const fakeToken = this.generateFakeToken()
      const result: LoginResponse = { ok: true, status: 200, token: fakeToken }
      if (result.ok) {
        this.setToken(fakeToken)
        return result
      }
      return { ok: true, status: 200, token: fakeToken }
    }
    return { ok: false, status: 401, token: '' }
  }
  private generateFakeToken(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const payload = btoa(JSON.stringify({ username: 'admin', role: 'admin', exp: Math.floor(Date.now() / 1000) + 3600 }))
    const signature = 'hashed-token-signature'
    return `${header}.${payload}.${signature}`
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  isAuthenticated(): boolean {
    if (this.isTokenExpired()) {
      this.logout()
      return false
    }
    return true
  }
  isTokenExpired(): boolean {
    const token = this.getToken()
    if (!token) return true

    try {
      const payloadBase64 = token.split('.')[1]
      const payloadJson = JSON.parse(atob(payloadBase64))
      const exp = payloadJson.exp

      return Date.now() / 1000 > exp
    } catch (error) {
      console.error('Error al decodificar el token:', error)
      return true
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey)
  }

}
