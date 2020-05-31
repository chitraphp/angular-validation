import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { PasswordMatch, AgeRangeValidator } from '../Validator/my-custom-validator';


@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    minValue=18;
    maxValue=50;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      phoneNumber: ['',[Validators.required,Validators.pattern('1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})')]],
      age: ['', Validators.required]
  }, {
      validator: [PasswordMatch('password', 'confirmPassword'),AgeRangeValidator(this.minValue,this.maxValue,'age')]
      //validator: PhoneNumValidation('phoneNumber')
      
  });
  }

  get registerFrmCntrls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

 
    if (this.registerForm.invalid) {
        return;
    }   
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
