import { Injectable } from '@angular/core';
import {Car} from 'src/app/model/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarservicesService {
  constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('src/app/data/car.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }
}
