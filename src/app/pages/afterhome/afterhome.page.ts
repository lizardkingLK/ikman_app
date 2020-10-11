import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afterhome',
  templateUrl: './afterhome.page.html',
  styleUrls: ['./afterhome.page.scss'],
})
export class AfterhomePage implements OnInit {
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  constructor() { }

  ngOnInit() {
  }

}
