import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    //Required validator custom
    static customRequired(
        control: AbstractControl
    ): { [key: string]: boolean } | null {
        if (!control.value || control.value.trim() === 0) {
            return { invalid: true };
        }
        return null;
    }

    //Re-password validator
    static confirmPass(fieldName: string): ValidatorFn {
        return (
            control: AbstractControl
        ): { [key: string]: boolean } | null => {
            if (control.parent) {
                const password = control.parent.get(fieldName).value;
                if (password !== control.value) {
                    return { invalid: true };
                }
            }
            return null;
        };
    }
}
