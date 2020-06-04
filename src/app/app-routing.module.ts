import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'spinnersShop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
