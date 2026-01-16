import { Injectable } from '@nestjs/common';

@Injectable() //decarator // add extra behaviour or meta data
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLost(): string {
    return 'this is getLost function';
  }
}
