import {Component, Input} from '@angular/core'

@Component({
  selector: 'wb-loading-spinner',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />',
 // inputs: ['loading']
})
export class LoadingSpinnerComponent {
  @Input() loading:boolean // Recommendedto use decorator
}
