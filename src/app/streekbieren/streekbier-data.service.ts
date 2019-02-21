import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Streekbier } from './streekbier/streekbier.model';
import { STREEKBIEREN, BROUWERIJEN } from '../mock-objects';
import { Brouwerij } from './brouwerij/brouwerij.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreekbierDataService {

  private readonly _url = '/api'

  streekbieren: Streekbier[]
  brouwerijen: Brouwerij[]

  constructor(private http: HttpClient) {
    this.brouwerijen = BROUWERIJEN
    //this.streekbieren = STREEKBIEREN
  }

  getStreekbieren(): Observable<Streekbier[]> {
    return this.http.get(`${this._url}/streekbieren`).pipe(
      map((list: any[]): Streekbier[] =>
        list.map(Streekbier.fromJSON)
      )
    )
  }

  getStreekbier(naam: string): Observable<Streekbier> {
    return this.http.get(`${this._url}/streekbieren/${naam}`).pipe(
      map(Streekbier.fromJSON)
    )
  }

  getBrouwerijen(): Observable<Brouwerij[]> {
    return this.http.get(`${this._url}/streekbieren/brouwerijen`).pipe(
      map((list: any[]): Brouwerij[] =>
        list.map(Brouwerij.fromJSON)
      )
    )
  }

  getBrouwerij(naam: string): Observable<Brouwerij> {
    return this.http.get(`${this._url}/streekbieren/brouwerijen/${naam}`).pipe(
      map(Brouwerij.fromJSON)
    )
  }

  wijzigStreekbier(origineleNaam: string, newBier: Streekbier) {
    console.log(newBier)
    return this.http.put(`${this._url}/streekbieren/${origineleNaam}`, newBier)
  }

  verwijderStreekbier(naam: string) {
    return this.http.delete(`${this._url}/streekbieren/${naam}`)
  }
}
