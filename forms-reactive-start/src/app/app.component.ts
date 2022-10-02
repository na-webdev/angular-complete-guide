import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Anna', 'James'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.checkUsernameValidity.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkEmailValidity
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signUpForm.setValue({
      userData: {
        username: 'Abdu',
        email: 'my@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      userData: {
        username: 'Abdurrahim',
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  onAddHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get controls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  checkUsernameValidity(control: FormControl): { [prop: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { forbiddenUsername: true };
    }
    return null;
  }

  checkEmailValidity(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
