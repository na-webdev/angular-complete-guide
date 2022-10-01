import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm
  answer = ''
  genders = ['male', 'female']
  user = {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    answer: '',
  }
  submitted = false
  suggestUserName() {
    const suggestedName = 'Superuser'
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'dog',
    //   gender: 'male',
    // })
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    })
  }

  onSubmit() {
    console.log(this.signUpForm)
    console.log(this.signUpForm.value, 'VALUE')
    console.log(this.signUpForm.touched, 'Touched')
    console.log(this.signUpForm.dirty, 'Dirty')
    console.log(this.signUpForm.submitted, 'Submitted')
    console.log(this.signUpForm.controls, 'Controls')
    console.log(this.signUpForm.control, 'Control')
    console.log(this.signUpForm.valid, 'Valid')
    this.user.username = this.signUpForm.value.userData.username
    this.user.email = this.signUpForm.value.userData.email
    this.user.secretQuestion = this.signUpForm.value.secretQuestion
    this.user.answer = this.signUpForm.value.questionAnswer
    this.user.gender = this.signUpForm.value.gender
    this.submitted = true
    this.signUpForm.reset()
  }
}
