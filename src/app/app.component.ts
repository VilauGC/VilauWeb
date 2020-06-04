import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  RoutesRecognized,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'VilauWebSSR';
  isBlog;
  browserRefresh = false;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.isBlog = false;
    this.router.events.subscribe((val) => {
      if (val instanceof RoutesRecognized) {
        if (val.state.url === '/blog') {
          this.isBlog = true;
          console.log(this.isBlog);
        } else {
          this.isBlog = false;
          console.log(this.isBlog);
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
