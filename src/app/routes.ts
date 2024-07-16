import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { OutfitIdeasComponent } from './outfit-ideas/outfit-ideas.component';

export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'inspo', component: OutfitIdeasComponent }
];
