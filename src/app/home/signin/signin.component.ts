import { PlatFormDetectorService } from './../../core/platform/platform-detector.service';
import { AuthService } from './../../core/auth/auth.service';

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  
  loginForm: FormGroup;
  @ViewChild('userNemeInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    private platFormDetectorService: PlatFormDetectorService
  ) {}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.platFormDetectorService.isPlatformBrowser() && 
    this.userNameInput.nativeElement.focus();
  }

  login(){
    
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]), 
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platFormDetectorService.isPlatformBrowser() && 
            this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }
}