import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(null, [CustomValidators.customRequired]),
      email: new FormControl(null, [CustomValidators.customRequired, Validators.email]),
      password: new FormControl(null, [CustomValidators.customRequired, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [
        CustomValidators.customRequired,
        Validators.minLength(6),
        CustomValidators.confirmPass('password'),
      ]),
      certificates: new FormArray([]),
    });
  }

  onAddCertificate() {
    const group = this.fb.group({
      language: [null, CustomValidators.customRequired],
      certificate: [null, CustomValidators.customRequired],
    });
    this.certificates.push(group);
  }

  get certificates() {
    return this.studentForm.get('certificates') as FormArray;
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
    } else {
      alert('Please type valid inputs');
    }
  }
}
