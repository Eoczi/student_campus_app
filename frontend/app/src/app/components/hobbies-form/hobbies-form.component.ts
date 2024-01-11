import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobby } from '../../modules/hobby.module';
import { HobbyService } from '../../services/hobbies.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hobbies-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hobbies-form.component.html',
  styleUrl: './hobbies-form.component.css',
  providers: [HobbyService, Router],
})
export class HobbiesFormComponent {
  hobbies: Hobby[] = [];
  selectedHobbies: Hobby[] = [];
  constructor(private service: HobbyService, private router: Router) {}

  ngOnInit() {
    this.service.getHobbies().subscribe((data) => {
      this.hobbies = data;
    });
  }

  onSubmit() {
    this.router.navigate(['/universities'], {
      queryParams: this.selectedHobbies,
    });
  }
}
