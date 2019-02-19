import { Component, OnInit } from '@angular/core';
import { Streekbier } from '../streekbier/streekbier.model';
import { StreekbierDataService } from 'src/app/streekbieren/streekbier-data.service';

@Component({
  selector: 'app-lijst-streekbieren',
  templateUrl: './lijst-streekbieren.component.html',
  styleUrls: ['./lijst-streekbieren.component.css'],
  providers: [StreekbierDataService]
})
export class LijstStreekbierenComponent implements OnInit {

  bieren: Streekbier[] = []

  constructor(private _dataService: StreekbierDataService) { }

  ngOnInit() {
    this._dataService.getStreekbieren().subscribe(
      bieren => this.bieren = bieren
    )
  }

}