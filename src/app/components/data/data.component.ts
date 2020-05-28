import { Component, OnInit } from '@angular/core';
import {Car} from 'src/app/model/car';
import { CarservicesService} from 'src/app/services/carservices.service';

const dataCars = [
      {brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff'},
      {brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345'}
 ];
 
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  cars: Car[];

  cols: any[];
  constructor(private carService: CarservicesService) { }

  ngOnInit() {
    this.cars = dataCars;

    this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
}

}
