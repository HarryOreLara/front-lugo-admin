import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '@class/index';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { CartItem } from '../../interfaces/car-tem.interface';
import { ProductFacade } from '@patterns//facade/product.facade';
import { EventBussService } from '@states/event-buss/event-buss.service';

@Component({
  selector: 'app-purchase-data-product-ui',
  templateUrl: './purchase-data-product.component.html',
  styleUrls: ['./purchase-data-product.component.css'],
})
export class PurchaseDataProductComponent implements AfterViewInit, OnInit {
  public filteredProducts: Product[] = [];
  public productControl = new FormControl(null);
  public cartItems: CartItem[] = [];
  @ViewChild('barcodeInput') barcodeInput!: ElementRef;
  @Input() public products: Array<Product> = [];
  @Output() public cartItemEmit: EventEmitter<CartItem[]> = new EventEmitter<
    CartItem[]
  >();

  public constructor(
    private readonly productFacade: ProductFacade,
    private readonly eventBussService: EventBussService,
  ) {}

  ngOnInit(): void {
    this.eventBussService.on<boolean>('lugo-purchase-reset').subscribe({
      next: (value) => {
        if (!value) return;

        this.clearCart();
      },
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.barcodeInput.nativeElement.focus();
    }, 100);
  }

  public filterProducts(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.sku?.toLowerCase().includes(query) ||
        product.barcode?.toLowerCase().includes(query),
    );
  }

  public selection(product: Product): void {
    const existing = this.cartItems.find((i) => i.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        sku: product.sku ?? '',
        quantity: 1,
        unitPrice: product.prices[0].salePrice,
      });
    }

    setTimeout(() => this.productControl.reset(), 0);
    this.cartItemEmit.emit(this.cartItems);
  }

  increaseQty(item: CartItem): void {
    item.quantity++;
    this.cartItemEmit.emit(this.cartItems);
  }

  decreaseQty(item: CartItem): void {
    if (item.quantity > 1) item.quantity--;
    this.cartItemEmit.emit(this.cartItems);
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
    this.cartItemEmit.emit(this.cartItems);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemEmit.emit(this.cartItems);
  }

  get total(): number {
    return this.cartItems.reduce((acc, i) => acc + i.quantity * i.unitPrice, 0);
  }

  onScan() {
    const value = this.productControl.value;

    if (!value) return;

    this.productFacade.findOneProductByBarCode(value).subscribe({
      next: (res: Product) => {
        this.selection(res);
      },
      error: (err) => {
        {
          err;
        }
      },
      complete: () => {
        this.productControl.reset();
      },
    });
  }
}
