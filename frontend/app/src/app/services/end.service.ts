import { Injectable } from '@angular/core';
import { Hobby } from '../modules/hobby.module';

@Injectable({
  providedIn: 'root',
})
export class EndService {
  hobbies: Hobby[] = [];

  constructor() {}

  getHobbies() {
    return this.hobbies;
  }

  setHobbies(hobbies: Hobby[]) {
    this.hobbies = hobbies;
  }
}
