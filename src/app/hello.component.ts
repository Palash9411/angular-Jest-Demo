import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `<form [formGroup]="loginForm" id="loginForm" >
                <div>
                  <input formControlName="username" placeholder="Username"  required/>
                </div>
                <div>
                  <input formControlName="password" placeholder="Password" type="password"/>
                </div>
             </form>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  constructor(private fb : FormBuilder){}
  @Input() name: string;
  loginForm ;

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      username : ['',Validators.compose([Validators.required])],
      password :['']
    })
  }
}
