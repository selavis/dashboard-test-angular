import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  myControl = new FormControl();
  options: string[] = ['La Rinascita Srl'];

  constructor() {

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    $(document).ready(() => {
      $('a').on('click', function (event) {
        if (this.hash !== '') {
          event.preventDefault();

          const hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function () {
            window.location.hash = hash;
          });
        }
      });
    });

    $(window).scroll(() => {
      const scrollDistance = $(window).scrollTop();
      $('.page-section ').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $('.navigation a.active').removeClass('active');
          $('.navigation a').eq(i).addClass('active');
        }
      });
    }).scroll();
  }
}
