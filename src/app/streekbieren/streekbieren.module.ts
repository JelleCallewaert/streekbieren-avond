import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreekbierComponent } from './streekbier/streekbier.component';
import { BrouwerijComponent } from './brouwerij/brouwerij.component';
import { LijstStreekbierenComponent } from './lijst-streekbieren/lijst-streekbieren.component';
import { WijzigStreekbierComponent } from './wijzig-streekbier/wijzig-streekbier.component';

@NgModule({
  declarations: [
    StreekbierComponent, 
    BrouwerijComponent, 
    LijstStreekbierenComponent, WijzigStreekbierComponent],
  imports: [
    CommonModule
  ],
  exports: [LijstStreekbierenComponent, WijzigStreekbierComponent]
})
export class StreekbierenModule { }
