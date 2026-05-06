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
    this.name = new FormControl(null, [
      Validators.required,
      this.onlyLettersValidator,
    ]);
    this.description = new FormControl(null);
    this.code = new FormControl({ value: null, disabled: true });
    this.channel = new FormControl(null);
    this.isActive = new FormControl(true);
  }

  public createForm(): void {
    this.form = this.fb.group({
      name: this.name,
      code: this.code,
      description: this.description,
      channel: this.channel,
      isActive: this.isActive,
    });

    this.listenName();
  }

  public updateForm(category: Category) {
    this.form.patchValue(category);
  }

  public listenName(): void {
    this.form.get('name')?.valueChanges.subscribe((name) => {

      if (!name) {
        this.form.get('code')?.setValue('', { emitEvent: false });
        return;
      }
      const code = this.generateCode(name);
      this.form.get('code')?.setValue(code, { emitEvent: false });
    });
  }

  private onlyLettersValidator(control: AbstractControl): ValidationErrors | null {
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
