import { NgModule } from '@angular/core';
import { UserRepositoryService } from './user-repository.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import {AccountMenuComponent } from './account-menu.component';
@NgModule({
    imports: [ CommonModule, RouterModule],
    exports: [ NavBarComponent,AccountMenuComponent ],
    declarations :[NavBarComponent,AccountMenuComponent ],
    providers :[ UserRepositoryService]
})

export class CoreModule{

}
