import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyBillComponent } from './Home-tab/company-bill/company-bill.component';
const routes: Routes = [
  { path: '',component:CompanyBillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
