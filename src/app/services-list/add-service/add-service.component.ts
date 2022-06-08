import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IService } from 'src/app/models/service.model';
import { ITradePerson } from 'src/app/models/tradeperson';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  services !: IService;
  tradesperson !: ITradePerson;
  
  serviceForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    title: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    category: new FormControl(''),
  });

  persontradeForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    title: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    domain: new FormControl(''),
    speciality: new FormControl(''),
    adress: new FormControl(''),
    category: new FormControl(''),
  });
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  ngOnInit(): void {
  }
  addTradePerson(contentTradeperson : any) {
    this.modalService.open(contentTradeperson, { centered: true });
  }

  addService(content : any) {
    this.modalService.open(content, { centered: true });
  }
  onSubmitToAddService() {
    // TODO: Use EventEmitter with form value
    console.warn(this.serviceForm.value);
  }
  onSubmitToAddPersontrade(){
    console.warn(this.persontradeForm.value);
  }

}
