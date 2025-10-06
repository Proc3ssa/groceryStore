import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-field',
  imports: [FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>(); 

  icon = 'fa fa-user';

  ngOnInit() {
    if (this.type === 'email') {
      this.icon = 'fa fa-envelope';
    } else if (this.type === 'password') {
      this.icon = 'fa fa-lock';
    } else {
      this.icon = 'fa fa-user';
    }
  }

}
