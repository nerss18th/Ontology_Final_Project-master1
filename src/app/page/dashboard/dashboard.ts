import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  public currentUser$: Observable<any>;
  public activeTab = 'projects';

  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser$;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
