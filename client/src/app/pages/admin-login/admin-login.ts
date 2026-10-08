import { Component, inject, input, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  templateUrl: './admin-login.html',
})
export default class AdminLogin {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  returnUrl = input<string>();

  protected readonly submitting = signal(false);
  protected readonly error = signal('');

  submit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();

    const data = new FormData(form);
    const username = String(data.get('username') ?? '').trim();
    const password = String(data.get('password') ?? '');

    this.error.set('');
    this.submitting.set(true);

    this.authService
      .login(username, password)
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () => this.router.navigateByUrl(this.returnUrl() ?? '/admin/products'),
        error: (error: HttpErrorResponse) =>
          this.error.set(
            error.status === 401
              ? 'Wrong username or password.'
              : 'Something went wrong. Try again.',
          ),
      });
  }
}
