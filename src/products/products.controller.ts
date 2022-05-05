import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { productsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: productsService) {}
  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id/:name')
  getOne(@Param('id') id, @Param('name') userName) {
    return this.productsService.getById(id);
  }
  @Post()
  @HttpCode(201)
  @Header('Cache-control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }
  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return (
      `Title ${updateProductDto.title} Price ${updateProductDto.price}` + id
    );
  }
}
