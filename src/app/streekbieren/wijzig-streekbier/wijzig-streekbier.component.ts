import { Component, OnInit, Input } from '@angular/core';
import { Streekbier } from '../streekbier/streekbier.model';

@Component({
  selector: 'app-wijzig-streekbier',
  templateUrl: './wijzig-streekbier.component.html',
  styleUrls: ['./wijzig-streekbier.component.css']
})
export class WijzigStreekbierComponent implements OnInit {

  @Input() streekbier: Streekbier;

  constructor() { }

  ngOnInit() {
  }

}
