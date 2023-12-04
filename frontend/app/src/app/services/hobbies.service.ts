import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobby } from '../modules/hobby.module';

@Injectable()
export class HobbyService {
  private apiUrl = 'http://localhost:5000/api/hobbies';
  constructor(private http: HttpClient) {}

  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.apiUrl);
  }
}
