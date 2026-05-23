import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '@class/category/category.class';
import { StepPresenter } from '@states/forms/step.presenter';
import {
  noWhitespaceValidator,
  onlyLettersValidator,
} from 'src/app/commons/validators';

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
      onlyLettersValidator(),
      noWhitespaceValidator(),
    ]);
    this.description = new FormControl(null, [
      Validators.maxLength(50),
      Validators.minLength(3),
    ]);
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
