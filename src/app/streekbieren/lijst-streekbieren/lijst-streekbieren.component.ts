import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Streekbier } from '../streekbier/streekbier.model';
import { StreekbierDataService } from 'src/app/streekbieren/streekbier-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lijst-streekbieren',
  templateUrl: './lijst-streekbieren.component.html',
  styleUrls: ['./lijst-streekbieren.component.css'],
  providers: [StreekbierDataService]
})
export class LijstStreekbierenComponent implements OnInit {

  bieren: Streekbier[] = []

  @Output() public changeStreekbier = new EventEmitter<Streekbier>()

  constructor(private _dataService: StreekbierDataService, private router: Router) { }

  ngOnInit() {
    this._dataService.getStreekbieren().subscribe(
      bieren => this.bieren = bieren
    )
  }

  changeBier(localBier: Streekbier){
    this.changeStreekbier.emit(localBier)

    this.router.navigate(['streekbieren/wijzig/', localBier.naam])
    return false
  }

  verwijder(localBier: Streekbier){
    this._dataService.verwijderStreekbier(localBier.naam)
  }

}
