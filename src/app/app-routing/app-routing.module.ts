import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StreekbierenModule } from '../streekbieren/streekbieren.module'

const appRoutes: Routes = [
    { path: 'streekbieren',
        loadChildren: ()=> StreekbierenModule},
    { path: '', redirectTo:'streekbieren/lijst', pathMatch: 'full'}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule{}