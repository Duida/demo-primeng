import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/model/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('src/app/data/car.json')
            .toPromise()
            .then(res => res.data as Car[])
            .then(data => data);
    }
}
