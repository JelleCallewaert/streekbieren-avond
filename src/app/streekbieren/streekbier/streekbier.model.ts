import { Brouwerij } from '../brouwerij/brouwerij.model';

export class Streekbier {
    _naam: string
    _percentage: number
    _brouwerij: Brouwerij

    constructor(
        naam: string,
        percentage: number,
        brouwerij: Brouwerij
    ){
        this._naam = naam
        this._percentage = percentage
        this._brouwerij = brouwerij
    }

    get naam(): string {
        return this._naam;
    }
    get percentage(): number {
        return this._percentage
    }
    get brouwerij(): Brouwerij {
        return this._brouwerij
    }

    set naam(naam: string) {
        this._naam = naam
    }
    set percentage(percentage: number) {
        this._percentage = percentage
    }
    set brouwerij(brouwerij: Brouwerij) {
        this._brouwerij = brouwerij
    }

    editBier(naam: string, percentage: number, brouwerij: Brouwerij){
        naam = naam
        percentage = percentage
        brouwerij = brouwerij
    }

    static fromJSON(json: any): Streekbier {
        const brouwerij = new Brouwerij(
            json.brouwerij.naam,
            json.brouwerij.locatie,
            json.brouwerij.datumOpgericht
            )
        const bier = new Streekbier(
            json.naam,
            json.percentage,
            brouwerij
        )
        return bier
    }

    toJSON(){
        return {
            naam: this._naam,
            percentage: this._percentage,
            brouwerij: this._brouwerij.toJSON
        }
    }

}