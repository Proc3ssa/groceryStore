import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CustomCheckboxComponent {
  @Input() checked = false;
  @Input() label = '';
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
