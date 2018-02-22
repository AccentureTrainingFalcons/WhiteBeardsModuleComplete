import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';
import { SharedModule } from '../shared/shared.module'
@NgModule({
    imports: [ 
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent, },
            { path: 'sign-in', component: SignInComponent, }
        ]),
        ReactiveFormsModule, 
        FormsModule, 
        SharedModule],
    exports: [],
    declarations :[RegisterComponent,SignInComponent  ],
    providers :[ ]
})

export class UserModule{

}
