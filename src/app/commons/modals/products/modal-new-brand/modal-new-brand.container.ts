import { Component, Input } from '@angular/core';
import { Brand } from '@class/brand/brand.class';
import { ModalService } from '@components//host/app-modal.service';
import { BrandFacade } from '@patterns//facade/brand.facade';
import { Subject, takeUntil } from 'rxjs';
import { BrandFormPresenter } from './brand.form.presenter';
import { IBrandForm } from './models/brand-form.model';

@Component({
  selector: 'app-modal-new-brand',
  templateUrl: './modal-new-brand.container.html',
})
export class ModalNewBrandContainer {
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public visibleModal: boolean = true;

  @Input() brand: Brand;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly brandPresenter: BrandFormPresenter,
    private readonly modalService: ModalService,
    private readonly brandFacade: BrandFacade,
  ) {}

  ngOnInit(): void {
    console.log('ModalNewBrandContainer - INIT');
    console.log('Marca recibida:', this.brand);

    if (this.brand) {
      this.brandPresenter.updateForm(this.brand);
    } else {
      console.log('Es creación');
    }

    this.brandFacade.closeModal$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.close();
      });
  }

  public close() {
    this.modalService.close();
  }

  public saveBrand(brand: IBrandForm) {
    this.brandFacade.createBrand(brand);
  }

  public updateBrand({ brand, id }: { brand: IBrandForm; id: number }): void {
    this.brandFacade.updateBrand(brand, id);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
