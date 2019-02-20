import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Streekbier } from './streekbier/streekbier.model';
import { STREEKBIEREN, BROUWERIJEN } from '../mock-objects';
import { Brouwerij } from './brouwerij/brouwerij.model';

@Injectable({
  providedIn: 'root'
})
export class StreekbierDataService {

  streekbieren: Streekbier[]
  brouwerijen: Brouwerij[]

  constructor() { 
    this.brouwerijen = BROUWERIJEN
    this.streekbieren = STREEKBIEREN
  }


  getStreekbieren(): Observable<Streekbier[]> {
    return of(this.streekbieren)
  }

  getStreekbier(naam: string): Observable<Streekbier> {
    return of(this.streekbieren.find(bier => bier.naam === naam))
  }

  getBrouwerijen(): Observable<Brouwerij[]>{
    return of(this.brouwerijen)
  }

  getBrouwerij(naam: string): Observable<Brouwerij> {
    return of(this.brouwerijen.find(brouwer => brouwer.naam === naam))
  }

  wijzigStreekbier(origineleNaam: string, newBier: Streekbier){
    let index = this.streekbieren.indexOf(this.streekbieren.find(bier => bier.naam === origineleNaam))
    this.streekbieren[index] = newBier
  }
}
