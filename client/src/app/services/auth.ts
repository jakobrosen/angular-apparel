import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Läser token från localStorage. Saknas den eller går den inte att läsa blir den null.
function readStoredToken(): string | null {
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
}

// Plockar ut "exp" (sekunder) ur JWTns payload. Trasig token räknas som utgången.
function isExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  readonly token = signal<string | null>(readStoredToken());

  readonly isLoggedIn = computed(() => {
    const token = this.token();
    return token !== null && !isExpired(token);
  });

  constructor() {
    // Syncar token till localStorage, eller tar bort den vid utloggning.
    effect(() => {
      const token = this.token();
      try {
        if (token) {
          localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('token');
        }
      } catch {
        console.warn("Couldn't sync token to localstorage.");
      }
    });
  }

  // Loggar in och sparar token när svaret kommer.
  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>('/api/admin/auth/login', { username, password })
      .pipe(tap(({ token }) => this.token.set(token)));
  }

  logout(): void {
    this.token.set(null);
  }
}
