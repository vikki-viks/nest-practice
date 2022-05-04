import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { Products } from './products';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, Products],
})
export class AppModule {}
