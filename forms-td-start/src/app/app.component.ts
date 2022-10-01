import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') form: NgForm
  suggestUserName() {
    const suggestedName = 'Superuser'
  }

  onSubmit() {
    console.log(this.form)
    console.log(this.form.value, 'VALUE')
    console.log(this.form.touched, 'Touched')
    console.log(this.form.dirty, 'Dirty')
    console.log(this.form.submitted, 'Submitted')
    console.log(this.form.controls, 'Controls')
    console.log(this.form.control, 'Control')
    console.log(this.form.valid, 'Valid')
  }
}
