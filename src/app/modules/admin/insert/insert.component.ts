import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatasService } from 'app/core/datas/datas.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.style.css']
})
export class InsertComponent implements OnInit {

  fileName = '';

  verticalStepperForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, public _datas: DatasService)
  {
  }

  ngOnInit() {
    // Vertical stepper form
    this.verticalStepperForm = this._formBuilder.group({
      step1: this._formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
      }),
      step2: this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
      })
   });
  }

  onFileSelected(event) {
    const files: File[] = event.target.files;
    
    this._datas.addwithfile(files).subscribe((resp) => {
      this.fileName = '';
    });
  }

  carica() {
    this._datas.add(this.verticalStepperForm.get('step1').value.email, this.verticalStepperForm.get('step2').value.firstName, this.verticalStepperForm.get('step2').value.lastName).subscribe((resp) => {
      this.verticalStepperForm.reset();
    });
  }

}
