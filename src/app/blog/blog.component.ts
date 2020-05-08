import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  constructor() {}

  ngOnInit(): void {
    const countDownDate = new Date('May 31, 2020 12:00').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
