import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mean',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mean.component.html',
  styleUrl: './mean.component.css',
  providers: [Router],
})
export class MeanComponent implements OnInit {
  mean: Number = new Number();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const queryParams = {
      mean: this.mean,
    };
    this.router.navigate(['/hobbies'], { queryParams });
  }
}
