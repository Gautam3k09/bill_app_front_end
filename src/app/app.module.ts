import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyBillComponent } from './Home-tab/company-bill/company-bill.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyBillModalComponent } from './Home-tab/company-bill-modal/company-bill-modal.component';
import { CompanyBillInfoModalComponent } from './Home-tab/company-bill-info-modal/company-bill-info-modal.component';


const MaterialComponent=[
  MatButtonModule,MatIconModule,MatTabsModule
]
@NgModule({
  declarations: [
    AppComponent,
    CompanyBillComponent,
    CompanyBillModalComponent,
    CompanyBillInfoModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialComponent,
    ModalModule.forRoot(),
  ],
  exports:[MaterialComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule { }
