import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../modules/faculty.module';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  private apiUrl = 'http://localhost:5000/api/universities';
  constructor(private http: HttpClient) {}

  getUniversities(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }
}
