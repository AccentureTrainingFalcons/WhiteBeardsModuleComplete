import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [ CommonModule, RouterModule],
    exports: [ LoadingSpinnerComponent, CommonModule ],
    declarations :[LoadingSpinnerComponent ],
    providers :[ ]
})

export class SharedModule{

}
