import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

export class Product {

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    ){};
}
