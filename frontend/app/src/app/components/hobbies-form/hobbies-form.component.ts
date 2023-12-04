import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobby } from '../../modules/hobby.module';
import { HobbyService } from '../../services/hobbies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EndService } from '../../services/end.service';

@Component({
  selector: 'app-hobbies-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './hobbies-form.component.html',
  styleUrl: './hobbies-form.component.css',
  providers: [HobbyService, HttpClient, Router],
})
export class HobbiesFormComponent {
  hobbies: Hobby[] = [];
  selectedHobbies: Hobby[] = [];
  constructor(
    private service: HobbyService,
    private router: Router,
    private end: EndService
  ) {}

  ngOnInit() {
    this.service.getHobbies().subscribe((data) => {
      this.hobbies = data;
    });
  }

  onSubmit() {
    this.end.setHobbies(this.selectedHobbies);
    this.router.navigate(['/universities']);
  }
}
