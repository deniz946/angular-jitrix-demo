import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService extends BaseService<Person> {

  constructor(private _http: HttpClient) {
    super(_http);
  }
}
