import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form;
  processing;
  message;
  messageClass;

  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.createForm()
   }

   createForm() {
     this.form = this.formBuilder.group({
       name: ['', Validators.compose([
         Validators.required,
       ])],
       email: ['', Validators.compose([
        Validators.required,
        this.validateEmail
       ])],
       comment: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10)
       ])]
    });
   }

  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['name'].disable();
    this.form.controls['comment'].disable();
    }

  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['name'].enable();
    this.form.controls['comment'].enable();
  }

  onSubmit() {
    this.processing = true;
    this.disableForm();
  }


   validateEmail(controls) {
   const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   if (regExp.test(controls.value)) {
     return null;
     } else {
       return {'validateEmail': true}
     }
   }


  ngOnInit() {
  }

}
