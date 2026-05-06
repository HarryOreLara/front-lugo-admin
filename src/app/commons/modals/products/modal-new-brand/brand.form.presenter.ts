import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Category } from '@class/category/category.class';
import { StepPresenter } from '@states/forms/step.presenter';
import { IBrandForm } from './models/brand-form.model';

@Injectable({
  providedIn: 'root',
})
export class BrandFormPresenter extends StepPresenter<IBrandForm> {
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

    this.listenChanges();
  }

  public createValidators(): void {
    this.name.addValidators([Validators.required]);
    this.description.addValidators([Validators.required]);
    this.code.disable();
    this.channel.addValidators([Validators.required]);
    this.isActive.addValidators([Validators.required]);
    this.form?.updateValueAndValidity();
  }

  public updateForm(category: Category) {
    this.form.patchValue(category);
  }

  public listenChanges() {
    this.changeName();
  }

  public changeName(): void {
    this.name.valueChanges.subscribe((res: string) => {
      if (!res) return;

      const code = this.generateCode(res);

      this.code.setValue(code);
    });
  }

  private onlyLettersValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return regex.test(value) ? null : { onlyLetters: true };
  }

  private generateCode(name: string): string {
    return (
      'P_' +
      name
        .trim()
        .toUpperCase()
        .split(/\s+/)
        .map((word) => word.substring(0, 4))
        .join('_')
    );
  }
}
