import { SignUpService } from './signup.service';
import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignUpService) {}

  checkUserNameTaken() {

    return (control: AbstractControl) => {
      return null;
    }
  }
}