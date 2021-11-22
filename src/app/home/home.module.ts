import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[ 
    SignInComponent, 
    SignUpComponent
  ], 
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    VMessageModule, 
    RouterModule
  ]
})
export class HomeModule { }