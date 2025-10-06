import { Component, input } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [InputFieldComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  email: string = '';
  password: string = '';
  


  onsubmit() {
  
    console.log('Email:', this.email);
    console.log('Password', this.password);
   
  }
}
