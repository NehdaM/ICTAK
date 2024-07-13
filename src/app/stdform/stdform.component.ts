import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { StdformService } from '../services/stdform.service';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, ReactiveFormsModule,NgIf],
  templateUrl: './stdform.component.html',
  styleUrl: './stdform.component.css'
})
export class StdformComponent {

  stdForm!: FormGroup;

  constructor(
    
    private _sform: StdformService
  ) { }


  ngOnInit(): void {
    this.setForm();
    // this.getFormDetail();
  }


  setForm() {
    this.stdForm = new FormGroup({
      formName: new FormControl('', [Validators.required]),
      formPhoneno: new FormControl('', [Validators.required, Validators.minLength(10)]),
      formEmail: new FormControl('', [Validators.required, Validators.email]),
      formDob: new FormControl('', [Validators.required]),
      formBatch: new FormControl('', [Validators.required]),
      formGender: new FormControl('', [Validators.required])
    })
  }


  students: any=[];

  submit() {
    console.log(this.stdForm.value)
    console.log(this.stdForm.valid)

    if (this.stdForm.valid) {

      console.log(this.stdForm.value)
      this._sform.sformUser(this.stdForm.value).subscribe((data: any) => {
        console.log(data)

        this.stdForm.disable();         //disable fun needed
        alert(data.msg);
      })
    } else {
      alert("Please fill valid details")
    }
    this.students.push(this.stdForm.value)
    console.log("FormList :",this.students);
  }



}
