import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      conf_password: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(userData){
    // Send POST request to server through an api service
    console.log(userData);
    this.registerForm.reset();
  }
}
