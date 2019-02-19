import { Component, OnInit, Input } from '@angular/core';
import { Streekbier } from './streekbier.model';

@Component({
  selector: 'app-streekbier',
  templateUrl: './streekbier.component.html',
  styleUrls: ['./streekbier.component.css']
})
export class StreekbierComponent implements OnInit {

  @Input() public streekbier: Streekbier

  constructor() { }

  ngOnInit() {
  }

}
