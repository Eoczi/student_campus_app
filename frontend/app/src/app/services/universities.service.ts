import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../modules/faculty.module';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  private apiUrl = 'http://localhost:5000/api/universities';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  getUniversities(): Observable<Faculty[]> {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    return this.http.get<Faculty[]>(this.apiUrl, { params: queryParams });
  }
}
