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
    /*
    this.brouwerijen = BROUWERIJEN
    this.streekbieren = STREEKBIEREN
    */    
  }


  getStreekbieren(): Observable<Streekbier[]> {
    //return of(this.streekbieren)
    //return this.http.get<Streekbier[]>('localhost:8000/api/streekbieren')
    return this.http.get(`${this._url}/streekbieren`).pipe(
      map((list: any[]) : Streekbier[] => 
          list.map(Streekbier.fromJSON)
        )
    )
  }

  getStreekbier(naam: string): Observable<Streekbier> {
    //return of(this.streekbieren.find(bier => bier.naam === naam))
    //return this.http.get<Streekbier>('localhost:8000/api/streekbieren/'+naam)
    return this.http.get(`${this._url}/streekbieren/${naam}`)
    .pipe(map(Streekbier.fromJSON))
  }

  getBrouwerijen(): Observable<Brouwerij[]>{
    return of(this.brouwerijen)
  }

  getBrouwerij(naam: string): Observable<Brouwerij> {
    return of(this.brouwerijen.find(brouwer => brouwer.naam === naam))
  }

  wijzigStreekbier(origineleNaam: string, newBier: Streekbier){
    /*let index = this.streekbieren.indexOf(this.streekbieren.find(bier => bier.naam === origineleNaam))
    this.streekbieren[index] = newBier*/
    return this.http.put<void>('localhost:8000/api/streekbieren/'+origineleNaam, newBier)
  }

  verwijderStreekbier(naam: string) {
    this.streekbieren.splice(this.streekbieren.indexOf(this.streekbieren.find(bier => bier.naam === naam)),1)
    return this.http.delete<void>('localhost:8000/streekbieren/'+naam)
  }
}
