import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule],
})
export class RegisterComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (
      this.fullname.trim() &&
      this.email.trim() &&
      this.password &&
      this.password === this.confirmPassword
    ) {
      // Simulate registration
      this.router.navigate(['/']); // Go back to landing
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}