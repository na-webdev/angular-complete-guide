import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
})
export class FormArrayComponent {
  title = 'FormArray SetValue & PatchValue Example';

  teachersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teachersForm = this.fb.group({
      teachers: this.fb.array([]),
    });
  }

  /** Teachers */
  teachers(): FormArray {
    return this.teachersForm.get('teachers') as FormArray;
  }

  newTeacher(): FormGroup {
    return this.fb.group({
      name: '',
      batches: this.fb.array([]),
    });
  }

  addTeacher() {
    this.teachers().push(this.newTeacher());
  }

  removeTeacher(ti: number) {
    this.teachers().removeAt(ti);
  }

  /** batches */

  batches(ti: number): FormArray {
    return this.teachers().at(ti).get('batches') as FormArray;
  }

  newBatch(): FormGroup {
    return this.fb.group({
      name: '',
      students: this.fb.array([]),
    });
  }

  addBatch(ti: number) {
    this.batches(ti).push(this.newBatch());
  }

  removeBatch(ti: number, bi: number) {
    this.batches(ti).removeAt(ti);
  }

  /** students */

  students(ti: number, bi: number): FormArray {
    return this.batches(ti).at(bi).get('students') as FormArray;
  }

  newStudent(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }

  addStudent(ti: number, bi: number) {
    this.students(ti, bi).push(this.newStudent());
  }

  removeStudent(ti: number, bi: number, si: number) {
    this.students(ti, bi).removeAt(si);
  }

  onSubmit() {
    console.log(this.teachersForm.value);
  }
}
