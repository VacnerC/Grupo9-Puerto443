import { Component, OnInit, OnDestroy } from '@angular/core'; // Agrega OnDestroy
import { Subscription } from 'rxjs'; // Importa Subscription
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy { // Implementa OnDestroy
  isUserLoggedIn: boolean = false;
  private authSubscription!: Subscription; // Variable para la suscripción

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe(); // Evita fugas de memoria
    }
  }
}
