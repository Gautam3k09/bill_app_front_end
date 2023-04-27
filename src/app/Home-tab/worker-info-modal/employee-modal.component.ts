import { Component, Injectable, OnInit, Output, TemplateRef,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css'] 
})
export class EmployeeModalComponent implements OnInit {
  empName:any;
  compname:any;
  sharedata:any;
  modalRef?: BsModalRef;
  Role: any = ['Manager', 'Admin', 'Developer'];
  EmpRole: any;
  constructor(private appservice:AppServiceService,private modalService: BsModalService) {}
 
  EmployeeForm = new FormGroup({
    EmpName: new FormControl(''),
    EmpRole: new FormControl(''),
  });
  ngOnInit(): void {
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
  
  
}
