import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.router.navigate(['/']); // Goes back to landing
    }
  }
}
