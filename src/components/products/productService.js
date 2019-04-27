import { http } from '../../store';

// This class is a midleware responsable for calling backend services.
export default class ProductService {
  constructor() {
    console.log('ProductService.constructor()');
  }

  static getProducts(params) {
    const param = params ? `?${params}` : '';
    return http.get(`/products/${param}`);
  }

  static getProductsByCategory(params) {
    const param = params ? `?${params}` : '';
    return http.get(`/products/category/${param}`);
  }
}
