import { Injectable, NotFoundException } from '@nestjs/common';

import {Product} from './products.model'

@Injectable()
export class ProductsService {
  private products: Product[] = [];

    insertProduct(title:string, desc: string, price: number)
    {
      const proId = Math.random().toString();
      const newProduct = new Product(proId, title, desc, price);
      this.products.push(newProduct);
      return proId;
    }

    getProducts()
    {
     return [...this.products];
    }
    getProduct(id:string)
    {
      const product = this.products.find((product)=>product.id===id);
      if (!product) {
        throw new NotFoundException('could not find product');
      }
     return {...product};
    }
  }
