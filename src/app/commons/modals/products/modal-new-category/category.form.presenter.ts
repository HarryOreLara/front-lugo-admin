import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '@class/category/category.class';
import { StepPresenter } from '@states/forms/step.presenter';

@Injectable({
  providedIn: 'root',
})
export class CategoryFormPresenter extends StepPresenter<Category> {
  name: FormControl;
  code: FormControl;
  description: FormControl;
  channel: FormControl;
  isActive: FormControl;

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.name = new FormControl(null);
    this.description = new FormControl(null);
    this.code = new FormControl(null);
    this.channel = new FormControl(null);
    this.isActive = new FormControl(true);
  }

  public createForm(): void {
    this.initForm();
    this.createValidators();

    this.form = this.fb.group({
      name: this.name,
      code: this.code,
      description: this.description,
      channel: this.channel,
      isActive: this.isActive,
    });
  }

  public createValidators(): void {
    this.name.addValidators([Validators.required]);
    this.description.addValidators([Validators.required]);
    this.code.addValidators([Validators.required]);
    this.channel.addValidators([Validators.required]);
    this.isActive.addValidators([Validators.required]);
    this.form?.updateValueAndValidity();
  }
}
