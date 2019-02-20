import { Component, OnInit, Input } from '@angular/core';
import { Streekbier } from '../streekbier/streekbier.model';
import { Brouwerij } from '../brouwerij/brouwerij.model';
import { StreekbierDataService } from '../streekbier-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BROUWERIJEN } from 'src/app/mock-objects';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wijzig-streekbier',
  templateUrl: './wijzig-streekbier.component.html',
  styleUrls: ['./wijzig-streekbier.component.css'],
  providers: [StreekbierDataService]
})
export class WijzigStreekbierComponent implements OnInit {

  private teWijzigenStreekbier: Streekbier
  public streekbier: FormGroup
  alleBrouwerijen: Brouwerij[]

  constructor(
    private fb: FormBuilder,
    private dataService: StreekbierDataService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    //lijst van alle brouwerijen ophalen uit mock-objects
    this.alleBrouwerijen = BROUWERIJEN
    //naam uit route halen en streekbier opzoeken in dataservice
    this.route.queryParams.subscribe(params => {
      let originalNaam = params['naam']
      this.teWijzigenStreekbier = this.dataService.streekbieren.find(bier => bier.naam === originalNaam)
    })
    this.streekbier = this.fb.group({
      naam: [this.teWijzigenStreekbier.naam, [Validators.required, Validators.minLength(3)]],
      percentage: [this.teWijzigenStreekbier.percentage, [Validators.required, Validators.min(0), Validators.max(100)]],
      brouwerij: [this.teWijzigenStreekbier.brouwerij.naam]
    })
  }

  onSubmit(){
    let newBrouwer: Brouwerij
    this.dataService.getBrouwerij(this.streekbier.value.brouwerij).subscribe(brouwer => newBrouwer = brouwer)
    const changedBier = new Streekbier(
      this.streekbier.value.naam,
      this.streekbier.value.percentage,
      newBrouwer
    )
    this.dataService.wijzigStreekbier(this.teWijzigenStreekbier.naam ,changedBier)
    
    this.router.navigate(['streekbieren/lijst'])
  }
}
