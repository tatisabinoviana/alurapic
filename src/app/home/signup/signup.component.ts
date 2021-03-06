import { PlatFormDetectorService } from './../../core/platform/platform-detector.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, 
    private userNotTakenValidatorService: UserNotTakenValidatorService, 
    private signUpService: SignUpService, 
    private router: Router, 
    private platFormDetectorService: PlatFormDetectorService
  ) {};

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', 
        [
          Validators.required, 
          Validators.email
        ]
      ], 
      fullName: ['', 
        [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(40)
        ]
      ], 
      userName: ['', 
        [
          Validators.required, 
          lowerCaseValidator, 
          Validators.minLength(2), 
          Validators.maxLength(30)
        ], 
        this.userNotTakenValidatorService.checkUserNameTaken()
      ], 
      password: ['', 
        [
          Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(14)
        ]
      ]
    });

    this.platFormDetectorService.isPlatformBrowser() && 
    this.emailInput.nativeElement.focus();
  }
  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(() => 
        this.router.navigate(['']),
        err => console.log(err)
        
      );
  }
}