import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { CustomValidators } from './custom-validators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    studentForm: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.studentForm = new FormGroup({
            name: new FormControl(null, [CustomValidators.customRequired]),
            email: new FormControl(null, [
                CustomValidators.customRequired,
                Validators.email,
            ]),
            password: new FormControl(null, [
                CustomValidators.customRequired,
                Validators.minLength(6),
            ]),
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
