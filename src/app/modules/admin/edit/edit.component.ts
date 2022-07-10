import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatasService } from 'app/core/datas/datas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  id: number;
  verticalStepperForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public _datas: DatasService)
  {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id == null) {
      this.router.navigate(['/report']);
    }

    this.verticalStepperForm = this._formBuilder.group({
      step1: this._formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
      }),
      step2: this._formBuilder.group({
          firstName: ['', Validators.required],
          lastName : ['', Validators.required],
      })
    });

    this._datas.getId(this.id).subscribe((resp) => {
      this.verticalStepperForm = this._formBuilder.group({
        step1: this._formBuilder.group({
            email: [String(resp.email), [Validators.required, Validators.email]],
        }),
        step2: this._formBuilder.group({
            firstName: [String(resp.firstName), Validators.required],
            lastName: [String(resp.lastName), Validators.required],
        })
      });
    });
  }

  update() {
    this._datas.edit(this.id, this.verticalStepperForm.get('step1').value.email, this.verticalStepperForm.get('step2').value.firstName, this.verticalStepperForm.get('step2').value.lastName).subscribe((resp) => {
      this.verticalStepperForm.reset();
      this.router.navigate(['/report']);
    });
  }

}
