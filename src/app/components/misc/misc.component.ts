import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng-lts/api';
import { Car } from 'src/app/model/car';


const dataCars = [
  { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
  { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
  { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
  { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' }
];
@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent {

  brands: any[] = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
  ];

  filteredBrands: any[];
  brand: any;
  cars: Car[];
  cols: any[];

  constructor() {
    FilterUtils['custom-equals'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return value.toString() === filter.toString();
    }

    this.cols = [
      { field: 'year', header: 'Year', filterMatchMode: 'custom-equals' },
      { field: 'brand', header: 'Brand', filterMatchMode: 'custom-equals' },
      { field: 'color', header: 'Color', filterMatchMode: 'custom-equals' },
      { field: 'vin', header: 'Vin', filterMatchMode: 'custom-equals' }
    ];

    this.cars = dataCars;
  }

  filterWithContains(event) {
    this.filteredBrands = FilterUtils.filter(this.brands, ['value'], event.query, 'contains');
  }



}
