import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {


  constructor() {

  }
  createDb() {

    let montres = [
      { id: 1, price: 200, name: 'swatch', marque: 'swatch', image: 'assets/images/product/product1.jpg', description: '1' },
      { id: 2, price: 250, name: 'rolex', marque: 'rolex', image: 'assets/images/product/product2.jpg', description: '2' },
      { id: 3, price: 300, name: 'sport', marque: 'sport', image: 'assets/images/product/product3.jpg', description: '3' },
      { id: 4, price: 350, name: 'casio', marque: 'casio', image: 'assets/images/product/product4.jpg', description: '4' }
    ];
    let users = [
      { id: 1, fName: 'Mahdi', lName: 'Lakhal', email: 'Mahdi@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 2, fName: 'Iheb', lName: 'Baklouti', email: 'Iheb@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 3, fName: 'Abderrahmen', lName: 'Masmoudi', email: 'Abderrahmen@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 4, fName: 'Taha', lName: 'LAgha', email: 'Taha@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 5, fName: 'Taha', lName: 'LAgha', email: 'Taha@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 6, fName: 'Taha', lName: 'LAgha', email: 'Taha@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 7, fName: 'Taha', lName: 'LAgha', email: 'Taha@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' },
      { id: 8, fName: 'Taha', lName: 'LAgha', email: 'Taha@gmail.com', pwd: '123456789', confirmPwd: '123456789', tel: '54410515', address: 'tunis' }
    ];
    return { montres, users };

  }
}