import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { WINDOW } from '../../window.service';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      // transition('show => hide', animate('4000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in-out')),
    ]),
    trigger('hLine', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      // transition('show => hide', animate('2000ms 2000ms ease-in-out')),
      transition('hide => show', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  faTwitterSquare = faTwitterSquare;
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  state = 'hide';
  @ViewChild('logo', {static: false}) logo: ElementRef;
  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition =
      this.logo.nativeElement.offsetTop - this.window.innerHeight;
    const scrollPosition = this.window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }
  }
}
