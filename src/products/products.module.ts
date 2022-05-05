import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { productsService } from './products.service';

@Module({
  providers: [productsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
