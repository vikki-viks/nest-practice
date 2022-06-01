import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { Bus } from './buses/entities/bus.entity';
import { Driver } from './buses/entities/driver.entity';
import { Violation } from './buses/entities/violation.entity';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'bus',
      entities: [Product, Bus, Driver, Violation],
      synchronize: true,
      migrations: [
        /*...*/
      ],
      migrationsTableName: 'migration',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
