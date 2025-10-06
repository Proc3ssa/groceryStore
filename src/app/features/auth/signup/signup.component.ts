import { Component, input } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from '../../../shared/checkbox/checkbox.component';
@Component({
  selector: 'app-signup',
  imports: [InputFieldComponent, FormsModule, CustomCheckboxComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isAccepted = false;


  onsubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password', this.password);
    console.log('Confirm Password', this.confirmPassword);
  }
}
