import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    status = ['stable', 'critical', 'finished'];
    projectForm: FormGroup;
    forbiddenNames = ['minh', 'kiet', 'phong', 'test'];
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.projectForm = new FormGroup({
            name: new FormControl(null, [
                Validators.required,
                forbiddenNameValidator(this.forbiddenNames),
            ]),
            email: new FormControl(null, [
                Validators.email,
                Validators.required,
            ]),
            status: new FormControl(null, [Validators.required]),
        });
    }

    onSubmit() {
        if (this.projectForm.valid) {
            console.log(this.projectForm.value);
        } else {
            alert('Please type valid inputs');
        }
    }
}

function forbiddenNameValidator(name: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = name.includes(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}


