import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobby } from '../../modules/hobby.module';
import { Faculty } from '../../modules/faculty.module';
import { EndService } from '../../services/end.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css',
  providers: [UniversitiesService, HttpClient],
})
export class UniversitiesComponent implements OnInit {
  selectedHobbies: Hobby[] = [];
  faculties: Faculty[] = [];

  //in constructor private end: EndService
  constructor(private service: UniversitiesService) {}

  ngOnInit() {
    this.service.getUniversities().subscribe((data) => {
      this.faculties = data;
    });
    /*this.selectedHobbies = this.end.getHobbies();
    console.log(this.selectedHobbies);*/
  }
}
