import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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

  public constructor(private readonly fb: FormBuilder) {
    super();
  }

  public initForm(): void {
    this.name = new FormControl(null);
    this.description = new FormControl(null);
    this.code = new FormControl(null);
    this.channel = new FormControl(null);
  }

  public createForm(): void {
    this.initForm();

    this.form = this.fb.group({
      name: this.name,
      code: this.code,
      description: this.description,
      channel: this.channel,
    });
  }
}
