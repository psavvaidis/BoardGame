import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(userData){
    // Send POST request to server through an api service
    console.log(userData);
    this.loginForm.reset();
  }

}
