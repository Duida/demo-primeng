import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng-lts/api';
import { CarservicesService} from 'src/app/services/carservices.service';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  providers:[ MessageService]
})
export class ValidationComponent  {

  cars: Car[];

    constructor(private carService: CarservicesService, private messageService: MessageService)  {}

    initData()  {
        this.messageService.add({severity:'success', summary:'Data Initialized', detail:'Render Completed'});
        this.carService.getCarsSmall().then(cars => this.cars = cars);
     }

}
