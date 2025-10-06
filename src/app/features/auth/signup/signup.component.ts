import { Component, input } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  imports: [InputFieldComponent, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onsubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password', this.password);
    console.log('Confirm Password', this.confirmPassword);
  }
}
