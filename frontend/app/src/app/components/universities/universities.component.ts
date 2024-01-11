import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faculty } from '../../modules/faculty.module';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css',
  providers: [UniversitiesService],
})
export class UniversitiesComponent implements OnInit {
  faculties: Faculty[] = [];

  constructor(private service: UniversitiesService) {}

  ngOnInit() {
    this.service.getUniversities().subscribe((data) => {
      this.faculties = data;
    });
  }
}
