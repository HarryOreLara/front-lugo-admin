import { Injectable } from '@angular/core';
import { IUser } from '@interfaces/index';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthCookieService {
  constructor(private cookieService: CookieService) {}

  setToken(token: string) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    // Configura las opciones de la cookie según tus necesidades de seguridad
    this.cookieService.set('authToken', token, {
      path: '/', // Asegura que la cookie esté disponible en todas las rutas de la app
      sameSite: 'Lax', // 'Lax' permite que las cookies se envíen con solicitudes de nivel superior
      expires: expires, // Establece la fecha de expiración de la cookie
    });
  }

  getToken(): string {
    return this.cookieService.get('authToken');
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(Date.now() / 1000);
      return decoded.exp > now;
    } catch {
      return false;
    }
  }
  clearToken() {
    this.cookieService.delete('authToken');
  }

  checkTokenInCookie(): boolean {
    return this.cookieService.check('authToken');
  }

  getUserDataFromToken(): IUser | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }
}
