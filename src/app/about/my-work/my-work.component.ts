import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  HostListener,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { WINDOW } from 'src/app/window.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css'],
  animations: [
    trigger('hline', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hide', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition('hide => show', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class MyWorkComponent implements OnInit {
  state = 'hide';
  homeV3: any;
  @ViewChild('myWork', { static: false }) myWork: ElementRef;
  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {
    this.homeV3 = document.getElementById('homeV3');
    this.homeV3.addEventListener('click', () => {
      window.open('https://temaconstructii.web.app/', '_blank');
      console.log('Clicked on v3');
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition =
      this.myWork.nativeElement.offsetTop - this.window.innerHeight;
    const scrollPosition = this.window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    }
  }
}
