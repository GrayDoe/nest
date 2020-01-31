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
    updateProduct(id:string, title:string, desc: string, price: number)
    {
      const index = this.getSingleProduct(id)[1];
      const firstPart = [...this.products.slice(0,index)];
      const lastPart = [...this.products.slice(index+1)];
      console.log(id);
      console.log(title);
      console.log(desc);
      console.log(price);

      let updatedItem = {...this.getSingleProduct(id)[0]};

      if(title)
      {
        updatedItem.title=title;
        console.log('апдейтил title');
      }
      if(desc)
      {
        updatedItem.description=desc;
        console.log('апдейтил desc');
      }
      if(price)
      {
        updatedItem.price=price;
        console.log('апдейтил price');
      }

      const finishedArray = [...firstPart,updatedItem, ...lastPart];
      this.products= [...finishedArray];
      return updatedItem;
    }
    getProduct(id:string)
    {
      const product = this.getSingleProduct(id)[0];
     return {...product};
    }

    private getSingleProduct(id:string):[Product, number] {
      const index = this.products.findIndex((prod)=>prod.id===id);
      console.log(index);
      const product = this.products[index];
      if (!product) {
        throw new NotFoundException('could not find product');
      }
      return [product, index];
    }
  }
