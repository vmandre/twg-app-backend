import { http } from '../../store';

// This class is a midleware responsable for calling backend services.
export default class HeaderService {
  constructor() {
    console.log('HeaderService.constructor()');
  }

  static getCategories() {
    return http.get('/products/categories');
  }
}
