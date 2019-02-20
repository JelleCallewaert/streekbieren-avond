import { Streekbier } from './streekbieren/streekbier/streekbier.model';
import { Brouwerij } from './streekbieren/brouwerij/brouwerij.model'

var DATUMS: Date[]=[
    new Date('1968-11-16T00:00:00'),
    new Date('1891-05-19T00:00:00'),
    new Date('1905-02-03T00:00:00'),
    new Date('1895-11-27T00:00:00'),
    new Date('1901-09-18T00:00:00'),
    new Date('1859-04-11T00:00:00'),
]
export var BROUWERIJEN: Brouwerij[] = [
    new Brouwerij("Brouwerij Van der ginste","Bellegem",DATUMS[0]),
    new Brouwerij("Duvel Moortgat","Puurs",DATUMS[1]),
    new Brouwerij("Brouwerij uuuuh","Het land van geen idee",DATUMS[2]),
    new Brouwerij("Brouwerij van Orval","Villers-devant-orval",DATUMS[3]),
    new Brouwerij("Brouwerij De Halve Maan","Brugge",DATUMS[4]),
    new Brouwerij("Brouwerij Van Steenberghe","Ertvelde",DATUMS[5]),
]

export var STREEKBIEREN: Streekbier[] = [
    new Streekbier("Omer", 6.2,BROUWERIJEN[0]),
    new Streekbier("Duvel", 7.2, BROUWERIJEN[1]),
    new Streekbier("Idk", 10.8, BROUWERIJEN[2]),
    new Streekbier("Orval", 6.2, BROUWERIJEN[3]),
    new Streekbier("Brugse Zot", 7.0, BROUWERIJEN[4]),
    new Streekbier("Gentse tripel", 8.2, BROUWERIJEN[5]),
    
]