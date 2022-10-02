import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-assignment',
  templateUrl: './reactive-forms-assignment.component.html',
  styleUrls: ['./reactive-forms-assignment.component.css'],
})
export class ReactiveFormsAssignmentComponent implements OnInit {
  projectForm: FormGroup;
  projectStatus = ['stable', 'critical', 'finished'];
  forbiddenNames = ['Test'];

  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(
        null,
        [
          Validators.required,
          // this.checkNameValidity.bind(this)
        ],
        this.checkNameValidityAsync.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.projectStatus[0], Validators.required),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  checkNameValidity(control: FormControl): { [prop: string]: boolean } {
    if (this.forbiddenNames.includes(control.value)) {
      return { forbiddenName: true };
    }
    return null;
  }

  checkNameValidityAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenNames.includes(control.value)) {
          resolve({ forbiddenName: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
