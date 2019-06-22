import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit  {
  registerForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  

  public createAccount(): boolean {
    this.router.navigateByUrl('/login');
    return true;
  }
}
