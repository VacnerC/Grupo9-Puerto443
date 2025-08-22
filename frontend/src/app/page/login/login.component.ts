import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  onLogin() {
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('access_token', response.access_token);

        // Notifica al servicio que el usuario ha iniciado sesión.
        // Esto es lo que actualiza la barra de navegación.
        (this.authService as any).loggedIn.next(true);

        this.successMessage = '¡Inicio de sesión exitoso!';

        // Redirige después de un breve retraso para que el usuario vea el mensaje.
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (error) => {
        console.error('Error de login:', error);
        this.errorMessage = error.error.message || 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    });
  }
}