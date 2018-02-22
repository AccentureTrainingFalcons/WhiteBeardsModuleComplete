import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogRepositoryService } from './catalog-repository.service';
import { RouterModule } from '@angular/router';
import { FilterClassesService} from './filter-classes.service'
import { OrderByPipe } from './order-by.pipe'
@NgModule({
    imports: [ RouterModule, SharedModule],
    exports: [  ],
    declarations : [CatalogComponent,OrderByPipe ],
    providers :[ CatalogRepositoryService, FilterClassesService ]
})

export class CatalogModule{

}
