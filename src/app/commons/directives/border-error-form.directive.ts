import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[lugoErrorBorder]',
})
export class ErrorBorderDirective implements OnInit, OnDestroy {
  @Input() formControlName!: string;

  private statusSub!: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private controlContainer: ControlContainer,
  ) {}

  ngOnInit() {
    const formGroup = this.controlContainer.control as FormGroup;
    const control = formGroup?.get(this.formControlName);

    if (!control) return;

    this.statusSub = control.statusChanges.subscribe(() => {
      this.updateStyle(control);
    });

    this.updateStyle(control);
  }

  ngOnDestroy() {
    this.statusSub?.unsubscribe();
  }

  private updateStyle(control: AbstractControl) {
    const hasError = control.invalid && (control.dirty || control.touched);

    if (hasError) {
      this.renderer.addClass(this.el.nativeElement, 'p-invalid');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'p-invalid');
    }
  }
}
