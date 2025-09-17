import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welc',
  imports: [],
  templateUrl: './welc.component.html',
  styleUrl: './welc.component.scss'
})
export class WelcComponent {

  constructor(private router:Router){}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('/walkthrough');
    }, 3000);
  }

}
