import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ParticlesComponent } from './particles/particles.component';
import { ParticlesModule } from 'ngx-particle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './about/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    NavbarComponent,
    PrivacyPolicyComponent,
    ShopComponent,
    BlogComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ParticlesModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
