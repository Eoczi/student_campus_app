import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobby } from '../../modules/hobby.module';
import { EndService } from '../../services/end.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css',
  providers: [HttpClient],
})
export class UniversitiesComponent implements OnInit {
  selectedHobbies: Hobby[] = [];

  constructor(private end: EndService) {}

  ngOnInit() {
    this.selectedHobbies = this.end.getHobbies();
    console.log(this.selectedHobbies);
    //this.end.sendSelectedHobbies(this.selectedHobbies);
  }
}
