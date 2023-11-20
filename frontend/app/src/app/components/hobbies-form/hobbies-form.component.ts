import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hobby } from '../../modules/hobby.module';
import { HobbyService } from '../../services/hobbies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hobbies-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies-form.component.html',
  styleUrl: './hobbies-form.component.css',
  providers: [HobbyService],
})
export class HobbiesFormComponent {
  hobbies: Hobby[] = [];
  constructor(private service: HobbyService) {}

  ngOnInit() {
    this.service.getHobbies().subscribe((data) => {
      console.log(data);
      this.hobbies = data;
    });
  }
}
