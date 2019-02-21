import { Component, OnInit, Input } from '@angular/core';
import { Streekbier } from '../streekbier/streekbier.model';
import { Brouwerij } from '../brouwerij/brouwerij.model';
import { StreekbierDataService } from '../streekbier-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Kind of smart component?
@Component({
  selector: 'app-wijzig-streekbier',
  templateUrl: './wijzig-streekbier.component.html',
  styleUrls: ['./wijzig-streekbier.component.css'],
  providers: [StreekbierDataService]
})
export class WijzigStreekbierComponent implements OnInit {

  private readonly _header: string = "Wijzig Streekbier"
  private readonly _button: string = "Streekbier Bewerken"

  private teWijzigenStreekbier: Streekbier
  public streekbier: FormGroup
  alleBrouwerijen: Brouwerij[]

  constructor(
    private fb: FormBuilder,
    private dataService: StreekbierDataService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getBrouwerijen().subscribe(brouwers => this.alleBrouwerijen = brouwers)
    let originalNaam = this.route.snapshot.paramMap.get('naam')
    this.dataService.getStreekbier(originalNaam).subscribe(bier => {
      this.teWijzigenStreekbier = bier
      this.fillForm()
    })
    
    this.streekbier = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]],
      percentage: [0.0, [Validators.required, Validators.min(0), Validators.max(75)]],
      brouwerij: []
    })
  }

  fillForm() {
    this.streekbier = this.fb.group({
      naam: [this.teWijzigenStreekbier.naam, [Validators.required, Validators.minLength(3)]],
      percentage: [this.teWijzigenStreekbier.percentage, [Validators.required, Validators.min(0), Validators.max(75)]],
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
