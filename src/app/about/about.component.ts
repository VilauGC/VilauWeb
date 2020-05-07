import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Inject,
} from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { WINDOW } from '../window.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('hline', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hide', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition('hide => show', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  state = 'hide';
  @ViewChild('logo', { static: false }) logo: ElementRef;
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
