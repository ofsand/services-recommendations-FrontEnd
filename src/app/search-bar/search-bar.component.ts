import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesTradesPerson } from '../models/servicestradesperson.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() searchword:string='';
  
private input:string='';
  @Output() searchcriteria = new EventEmitter<String>();
  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCategory(event: any) {
    
  }

}
