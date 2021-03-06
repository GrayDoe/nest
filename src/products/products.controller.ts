import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';

import {ProductsService} from './products.service'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Post()
    addProduct
        (
            @Body('title') prodTitle: string, 
            @Body('description') prodDesc: string,
            @Body('price') prodPrice: number
        ): any{
        const genId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id:genId}
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string,) {
        return this.productsService.getProduct(prodId);
    }

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string, 
        @Body('title') prodTitled: string, 
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        )
    {
        console.log(prodId, prodTitled, prodDesc, prodPrice);
        return this.productsService.updateProduct(prodId, prodTitled, prodDesc, prodPrice);
        return null
    }
    
}
