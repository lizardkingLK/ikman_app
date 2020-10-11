import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private router: Router) {}

    options = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
    };

    btnClicked(){
        console.log('btn clicked');
        //this.router.navigate(['signin']);
    }
}
