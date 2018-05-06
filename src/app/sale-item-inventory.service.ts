import { Injectable } from '@angular/core';
import { SaleItem } from './models/saleitem.model';
import { SALEITEMSMENS } from './sale-item-inventory';

@Injectable()
export class SaleItemInventoryService {

  constructor() { }

  getSaleItemInventoryMens() {
    return SALEITEMSMENS;
  }

  getSaleItemMensByProductId(saleItemProductId: number) {
    for (let i = 0; i < SALEITEMSMENS.length; i++) {
      if(SALEITEMSMENS[i].productId === saleItemProductId) {
        return SALEITEMSMENS[i];
      }
    }
  }

}