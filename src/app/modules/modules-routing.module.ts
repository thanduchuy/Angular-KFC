import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from  './member/member.component';
import { CartComponent } from './cart/cart.component';
import { PopupFooterComponent } from './popup-footer/popup-footer.component';
import { MennuComponent } from './mennu/mennu.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'member', component: MemberComponent },
  { path: 'cart', component: CartComponent},
  { path: 'popup-footer', component: PopupFooterComponent},
  { path: 'popup-footer/:city', component: PopupFooterComponent},
  { path: 'mennu/:city', component: MennuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {}
