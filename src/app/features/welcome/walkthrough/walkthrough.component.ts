import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkthrough',
  imports: [CommonModule],
  templateUrl: './walkthrough.component.html',
  styleUrl: './walkthrough.component.scss'
})
export class WalkthroughComponent {
constructor(private router: Router) { }

  page1 = true;

 
    ash = '#C4C4C4'
    green = '#53B175'
 

  details = 

    {
      "title": 'Easy Shopping & Fesh Finds At Your Fingertips',

      "desc": 'Your one-stop shop for all your grocery needs. Discover a wide range of product',

      "img": 'assets/images/womanbag.png'
    }

    next() {
      if (this.page1) {
        this.page1 = false;
        this.details = {
          "title": 'Your Utility Grocery Experience Awaits You',
          "desc": 'Your one-stop shop for all your grocery needs.',
          "img": 'assets/images/womanshopping.png'
        };
        this.ash = '#53B175';
        this.green = '#C4C4C4';
      } else {
        this.router.navigate(['auth/signup']);
      }
    }

    skip(){
      this.router.navigate(['auth/signup']);
    }

     

  

}
