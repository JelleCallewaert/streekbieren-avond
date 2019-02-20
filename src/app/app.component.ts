import { Component } from '@angular/core';
import { Streekbier } from './streekbieren/streekbier/streekbier.model';
import { Brouwerij } from './streekbieren/brouwerij/brouwerij.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'streekbieren-avond';
}
