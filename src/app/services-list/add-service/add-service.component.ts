import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category.model';
import { IService } from 'src/app/models/service.model';
import { ITradePerson } from 'src/app/models/tradeperson';
import { CategoryService } from 'src/app/services/data/category.service';
import { ServicesService } from 'src/app/services/data/services.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  services !: IService;
  tradesperson !: ITradePerson;
  servicestradesperson !: any[];
  categories !: Category[];
  idCategory : number = 0;

  serviceForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    title: new FormControl(''),
    location: new FormControl(''),
    phone: new FormControl(''),
    // category: new FormControl(''),
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
    // category: new FormControl(''),
  });
  constructor(private modalService: NgbModal, private fb: FormBuilder, private servicesService : ServicesService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.servicesService.getAllServicesTradesPerson().subscribe( data => {
      console.log("data : ",data);  
      this.servicestradesperson=data;
    });
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data
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
    // TODO: Use EventEmitter with form value
    console.warn(this.serviceForm.value);
    this.servicesService.addService(this.serviceForm.value,this.idCategory);
  }
  onSubmitToAddTradeperson(){
    console.warn(this.tradepersonForm.value);
    this.servicesService.addTradeperson(this.tradepersonForm.value,this.idCategory);
  }

  getCategory(event: any){
      this.idCategory =event.target.value;
      console.log("idCategory : ",this.idCategory); 
  }

}
