import { Injectable } from '@angular/core';
import { Hobby } from '../modules/hobby.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EndService {
  hobbies: Hobby[] = [];

  constructor(private http: HttpClient) {}

  getHobbies() {
    return this.hobbies;
  }

  setHobbies(hobbies: Hobby[]) {
    this.hobbies = hobbies;
  }

  /*sendSelectedHobbies(hobbies: Hobby[]) {
    return this.http.post('/api/universities', hobbies);
  }*/
}
