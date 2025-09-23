import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-type',
  imports: [CommonModule, RouterLink],
  templateUrl: './account-type.component.html',
  styleUrl: './account-type.component.scss'
})
export class AccountTypeComponent {

  primaryColor = '#01AC66';
  white = '#d8d5d566';
  ash = '#bbbbbbff';
  boxShadow = '0 0  8px rgba(0, 0, 2, 0.546)';
  boxShadow2 = '';


  selectAccountType() {

  this.primaryColor = this.primaryColor === this.ash ? '#01AC66' : this.ash;

  }
}
