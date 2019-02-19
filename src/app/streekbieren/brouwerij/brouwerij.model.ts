export class Brouwerij {
    private _naam: string
    private _locatie: string
    private _datumOpgericht: Date

    constructor(
        naam: string,
        locatie: string,
        datumOpgericht: Date
    ){
        this._naam = naam
        this._locatie = locatie
        this._datumOpgericht = datumOpgericht
    }

    get naam(): string {
        return this._naam
    }
    get locatie(): string {
        return this._locatie
    }
    get datumOpgericht(): Date {
        return this._datumOpgericht
    }
}