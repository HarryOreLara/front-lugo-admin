import { Component, OnInit } from '@angular/core';
import { InventaryFormPresenter } from '../../inventary-form.presenter';
import { Product } from '@class/index';
import { filter } from 'rxjs';
import { Channel } from '@enums/channel.enum';

@Component({
  selector: 'app-inventary-summary-ui',
  templateUrl: './inventary-summary.component.html',
  styleUrls: ['./inventary-summary.component.css'],
})
export class InventarySummaryComponent implements OnInit {
  public get stock(): number {
    return this.reactiveProduct ? this.reactiveProduct.stock : 0;
  }

  public get quantity(): number {
    return this.reactiveQuantity ? this.reactiveQuantity : 0;
  }

  public get stockResult(): number {
    return this.stock + this.quantity;
  }

  public get currentInvestment(): number {
    const price = this.reactiveProduct?.prices?.find(
      (x) => x.channel === Channel.PHYSICAL,
    );

    const value = price?.costPrice ?? 0;
    const stock = Number(this.stock) ?? 0;

    return value * stock;
  }

  public get totalCost(): number {
    return this.reactiveTotalCost ? this.reactiveTotalCost : 0;
  }


  public get newTotalAmount(): number{
    return this.totalCost + this.currentInvestment;
  }


  public reactiveProduct: Product;
  public reactiveQuantity: number;
  public reactiveTotalCost: number;

  constructor(public readonly inventaryFormPresenter: InventaryFormPresenter) {}

  ngOnInit(): void {
    this.initChangesPresenter();
  }

  initChangesPresenter() {
    this.changesInputProduct();
    this.changesInputQuantity();
    this.changesInputTotalCost();
  }

  changesInputProduct() {
    this.inventaryFormPresenter.Form.get('product')
      ?.valueChanges.pipe(
        filter((product) => typeof product === 'object' && product !== null),
      )
      .subscribe((product: Product) => {
        console.log({
          product,
        });
        this.reactiveProduct = product;
      });
  }

  changesInputQuantity() {
    this.inventaryFormPresenter.Form.get('quantity')
      ?.valueChanges
      // .pipe(
      //   filter((quant) => typeof quant === 'number' && quant !== null),
      // )
      .subscribe((res: number) => {
        this.reactiveQuantity = res;
      });
  }

  changesInputTotalCost() {
    this.inventaryFormPresenter.Form.get('totalCost')
      ?.valueChanges
      // .pipe(
      //   filter((quant) => typeof quant === 'number' && quant !== null),
      // )
      .subscribe((res: number) => {
        console.log({res});
        this.reactiveTotalCost = res;
      });
  }
}
