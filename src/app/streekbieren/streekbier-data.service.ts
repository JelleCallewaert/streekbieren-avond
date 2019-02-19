import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Streekbier } from './streekbier/streekbier.model';
import { STREEKBIEREN } from '../mock-objects';

@Injectable({
  providedIn: 'root'
})
export class StreekbierDataService {

  constructor() { }


  getStreekbieren(): Observable<Streekbier[]> {
    return of(STREEKBIEREN)
  }

  getStreekbier(naam: string): Observable<Streekbier> {
    return of(STREEKBIEREN.find(bier => bier.naam === naam))
  }
}
