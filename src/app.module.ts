import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { AppService } from './app.service';
import {ProductsModule} from './products/products.module'

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
