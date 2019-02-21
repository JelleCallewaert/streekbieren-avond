import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreekbierComponent } from './streekbier/streekbier.component';
import { BrouwerijComponent } from './brouwerij/brouwerij.component';
import { LijstStreekbierenComponent } from './lijst-streekbieren/lijst-streekbieren.component';
import { WijzigStreekbierComponent } from './wijzig-streekbier/wijzig-streekbier.component';
import { RouterModule, Routes } from '@angular/router';
import { StreekbierDataService } from './streekbier-data.service';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'lijst', component: LijstStreekbierenComponent },
  { path: 'wijzig/:naam', component: WijzigStreekbierComponent }
]

@NgModule({
  declarations: [
    StreekbierComponent, 
    BrouwerijComponent, 
    LijstStreekbierenComponent, 
    WijzigStreekbierComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  providers:[StreekbierDataService]
})
export class StreekbierenModule { }
