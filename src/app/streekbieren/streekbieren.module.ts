import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreekbierComponent } from './streekbier/streekbier.component';
import { BrouwerijComponent } from './brouwerij/brouwerij.component';
import { LijstStreekbierenComponent } from './lijst-streekbieren/lijst-streekbieren.component';

@NgModule({
  declarations: [
    StreekbierComponent, 
    BrouwerijComponent, 
    LijstStreekbierenComponent],
  imports: [
    CommonModule
  ],
  exports: [LijstStreekbierenComponent]
})
export class StreekbierenModule { }
