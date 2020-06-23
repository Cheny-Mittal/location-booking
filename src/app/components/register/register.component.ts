import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  register() {
    if(this.registerForm.get('confpassword').value === this.registerForm.get('password').value){
      sessionStorage.setItem('register', JSON.stringify(this.registerForm.value));
    }
  }

  login() {
    this.router.navigate(['/']);
  }

}
