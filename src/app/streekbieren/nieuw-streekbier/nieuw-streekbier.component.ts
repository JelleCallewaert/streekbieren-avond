import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StreekbierDataService } from '../streekbier-data.service';
import { Brouwerij } from '../brouwerij/brouwerij.model';
import { Streekbier } from '../streekbier/streekbier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nieuw-streekbier',
  templateUrl: '../wijzig-streekbier/wijzig-streekbier.component.html',
  styleUrls: ['./nieuw-streekbier.component.css']
})
export class NieuwStreekbierComponent implements OnInit {

  private readonly _header: string = "Nieuw Streekbier"
  private readonly _button: string = "Voeg Streekbier Toe"
  
  alleBrouwerijen: Brouwerij[]
  public streekbier: FormGroup

  constructor(
    private fb: FormBuilder,
    private dataService: StreekbierDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getBrouwerijen().subscribe(brouwers => this.alleBrouwerijen = brouwers)

    this.streekbier = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]],
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(75)]],
      brouwerij: []
    })
  }

  onSubmit(){
    let newBrouwer: Brouwerij
    this.dataService.getBrouwerij(this.streekbier.value.brouwerij).subscribe(brouwer => newBrouwer = brouwer)
    const nieuwbier = new Streekbier(
      this.streekbier.value.naam,
      this.streekbier.value.percentage,
      newBrouwer
    )
    this.dataService.nieuwStreekbier(nieuwbier)
    this.router.navigate(['streekbieren/lijst'])
  }

}
