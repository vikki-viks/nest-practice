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
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  @Redirect('https://google.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('pee');
    return 'getAll';
  }
  @Get(':id/:name')
  getOne(@Param('id') id, @Param('name') userName) {
    return 'getOne' + id + userName;
  }
  @Post()
  @HttpCode(201)
  @Header('Cache-control', 'none')
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
