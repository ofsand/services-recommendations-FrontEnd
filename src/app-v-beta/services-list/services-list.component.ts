import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category.model';
import { IService } from 'src/app/models/service.model';
import { ServicesTradesPerson } from 'src/app/models/servicestradesperson.model';
import { ITradePerson } from 'src/app/models/tradeperson';
import { CategoryService } from 'src/app/services/data/category.service';
import { ServicesService } from 'src/app/services/data/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  services !: IService;
  tradesperson !: ITradePerson;
  servicestradesperson !: any[];
  servicestradespersons !: ServicesTradesPerson[];
  categories !: Category[];
  idCategory : number = 0;

  serviceForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    title: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
  });

  tradepersonForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    title: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    domain: new FormControl(''),
    speciality: new FormControl(''),
    adress: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private _router : Router,private modalService: NgbModal, private fb: FormBuilder, private servicesService : ServicesService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.servicesService.getAllServicesTradesPerson().subscribe( data => {
      console.log("data : ",data);  
      this.servicestradesperson=data;
    });
    
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
   
  }

 
  addTradePerson(contentTradeperson : any) {
    this.modalService.open(contentTradeperson, { centered: true });
  }

  addService(content : any) {
    this.modalService.open(content, { centered: true });
  }
  onSubmitToAddService() {
    // console.warn(this.serviceForm.value);
    this.servicesService.addService(this.serviceForm.value,this.idCategory).subscribe(
      (data: any) => {
        this.servicestradesperson = this.servicestradesperson.filter(servicetradeperson => (servicetradeperson.id !== data.id))
        this.servicestradesperson.push(data)
      }
    )
  
  }
  onSubmitToAddTradeperson(){
    console.warn(this.tradepersonForm.value);
    this.servicesService.addTradeperson(this.tradepersonForm.value,this.idCategory).subscribe(
      (data: any) => {
        this.servicestradesperson = this.servicestradesperson.filter(servicetradeperson => (servicetradeperson.id !== data.id))
        this.servicestradesperson.push(data)
      }
    )
  }

  getCategory(event: any){
    this.idCategory =event.target.value;
    console.log("idCategory : ",this.idCategory); 
  }
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  onDelete(idServiceTradePerson: number) {
    this.servicesService.deleteServiceTradePerson(idServiceTradePerson).subscribe(
      data => {
        this.servicestradesperson = 
          this.servicestradesperson.filter((servicestradesperson: ServicesTradesPerson) => servicestradesperson.id !== idServiceTradePerson)
      }
    )
  }
  
}
