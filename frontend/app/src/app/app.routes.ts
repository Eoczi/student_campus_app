import { Routes } from '@angular/router';
import { HobbiesFormComponent } from './components/hobbies-form/hobbies-form.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MeanComponent } from './components/mean/mean.component';

export const routes: Routes = [
  { path: 'mean', component: MeanComponent },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'hobbies', component: HobbiesFormComponent },
  { path: '', component: HomepageComponent },
];
