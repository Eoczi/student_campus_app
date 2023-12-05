import { Routes } from '@angular/router';
import { HobbiesFormComponent } from './components/hobbies-form/hobbies-form.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: 'hobbies', component: HobbiesFormComponent },
  { path: 'universities', component: UniversitiesComponent },
  { path: '', component: HomepageComponent },
];
