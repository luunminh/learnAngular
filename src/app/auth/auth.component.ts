import { SnackbarService } from './../shared/snackbar.service';
import { AuthService, AuthResponseData } from './auth.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  studentForm: FormGroup;
  isLoading = false;
  error: string = null;
  isLogin = true;
  constructor(
    private snackbarService: SnackbarService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    if (this.isLogin) {
      this.studentForm = new FormGroup({
        name: new FormControl(null, [CustomValidators.customRequired]),
        email: new FormControl(null, [CustomValidators.customRequired, Validators.email]),
        password: new FormControl(null, [CustomValidators.customRequired, Validators.minLength(6)]),
      });
    } else {
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
      this.isLoading = true;
      const { email, password } = this.studentForm.value;
      let authObs: Observable<AuthResponseData>;
      if (this.isLogin) {
        authObs = this.authService.login(email, password);
      } else {
        authObs = this.authService.signUp(email, password);
      }
      authObs.subscribe(
        resData => {
          this.error = null;
          let data = this.studentForm.value;
          delete data['confirmPassword'];
          // this.authService.setUser(data);
          this.isLoading = false;
          this.router.navigate(['task-management']);
        },
        error => {
          this.error = error;
          this.isLoading = false;
        },
      );
      this.studentForm.reset;
    } else {
      alert('Please type valid inputs');
    }
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
    this.initializeFormGroup();
  }
}
