import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import { ContactComponent } from './components/contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio-proyecto';
}
