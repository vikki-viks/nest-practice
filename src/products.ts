import { Injectable } from '@nestjs/common';

@Injectable()
export class Products {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }
}
