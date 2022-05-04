import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return 'getAll';
  }
  @Get(':id/:name')
  getOne(@Param('id') id, @Param('name') userName) {
    return 'getOne' + id + userName;
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title ${createProductDto.title} Price ${createProductDto.price}`;
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
