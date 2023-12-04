import { Routes } from '@angular/router';
import { HobbiesFormComponent } from './components/hobbies-form/hobbies-form.component';
import { UniversitiesComponent } from './components/universities/universities.component';

export const routes: Routes = [
  { path: '', component: HobbiesFormComponent },
  { path: 'universities', component: UniversitiesComponent },
];
