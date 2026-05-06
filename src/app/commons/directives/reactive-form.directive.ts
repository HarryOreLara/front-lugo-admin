import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { ErrorMessage } from '@constants/error-message.constant';
import { merge, Subscription } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[lugoReactiveForm]',
})
export class ReactiveFormDirective implements OnInit, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  @Input() public formControlName!: string;

  private errorElement!: HTMLElement | null;
  private statusSubscription!: Subscription;

  constructor(
    public controlContainer: ControlContainer,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.setupErrorHandling();
  }

  ngOnDestroy() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }
    this.removeErrorMessage();
  }

  @HostListener('blur')
  public _handleBluredEvent() {
    this.setErrorControl();
  }
  private setupErrorHandling() {
    const formGroup = this.controlContainer.control as FormGroup;
    const control = formGroup?.controls?.[this.formControlName];

    if (!control) return;

    this.statusSubscription = merge(
      control.statusChanges,
      control.valueChanges,
    ).subscribe(() => {
      this.setErrorControl();
    });

    // Verificar estado inicial
    this.setErrorControl();
  }

  setErrorControl() {
    const formGroup = this.controlContainer.control as FormGroup;
    const control = formGroup?.controls?.[this.formControlName];
    if (!control) return;

    const hasError = control.invalid && (control.dirty || control.touched);
    if (hasError) {
      let message = '';
      for (const propertyName in control.errors) {
        if (control.errors[propertyName]) {
          message = ErrorMessage(propertyName, control.errors[propertyName]);
          break;
        }
      }
      this.showErrorMessage(message);
    } else {
      this.removeErrorMessage();
    }
  }

  private showErrorMessage(message: string) {
    if (!this.errorElement) {
      this.errorElement = this.renderer.createElement('small');
      this.renderer.addClass(this.errorElement, 'p-error');
      this.renderer.addClass(this.errorElement, 'block');
      this.renderer.addClass(this.errorElement, 'mt-1');

      // Asegurar el color rojo
      this.renderer.setStyle(this.errorElement, 'color', '#e24c4c');
      this.renderer.setStyle(this.errorElement, 'font-size', '0.875rem');
      this.renderer.setStyle(this.errorElement, 'line-height', '1.25rem');

      // Insertar después del p-floatlabel
      const floatLabelWrapper = this.el.nativeElement.closest('p-floatlabel');
      const fieldWrapper =
        floatLabelWrapper?.parentElement ||
        this.el.nativeElement.closest('.field');

      if (fieldWrapper) {
        this.renderer.appendChild(fieldWrapper, this.errorElement);
      } else {
        // Fallback: insertar después del contenedor del input
        const inputWrapper = this.el.nativeElement.parentElement;
        this.renderer.insertBefore(
          inputWrapper.parentElement,
          this.errorElement,
          inputWrapper.nextSibling,
        );
      }
    }
    this.renderer.setProperty(this.errorElement, 'textContent', message);
  }

  private removeErrorMessage() {
    if (this.errorElement) {
      const parent = this.errorElement.parentElement;
      if (parent) {
        this.renderer.removeChild(parent, this.errorElement);
      }
      this.errorElement = null;
    }
  }
}
