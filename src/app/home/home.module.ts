import { SignInComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[ SignInComponent ], 
  imports: [ ReactiveFormsModule ]
})
export class HomeModule { }