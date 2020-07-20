import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLinear:boolean =  true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  name:string;
  projectName:string;
  projectLocation:string;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      projectLocation: ['', Validators.required],
      projectName: ['', Validators.required],
      

    });
  }

}
