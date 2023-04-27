import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { HomePageComponent } from './Home-tab/home-page/home-page.component';
import { CompanyBillComponent } from './Home-tab/company-bill/company-bill.component';
import { CompanyInventoryComponent } from './Home-tab/company-inventory/company-inventory.component';
import { WorkerInfoComponent } from './Home-tab/worker-info/worker-info.component';
import { CompanyMachinesComponent } from './Home-tab/company-machines/company-machines.component';
import { EmployeeModalComponent } from './Home-tab/worker-info-modal/employee-modal.component';
const routes: Routes = [
  { path: '',component:HomePageComponent},
  { path: 'company-bill',component:CompanyBillComponent},
  { path: 'company-inventory',component:CompanyInventoryComponent},
  { path: 'worker-info',component:WorkerInfoComponent},
  { path: 'company-machines',component:CompanyMachinesComponent},
  {path:'home',component:EmployeeModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
