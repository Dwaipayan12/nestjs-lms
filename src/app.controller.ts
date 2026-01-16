import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //request and respone handler
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api') //get request create
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getLost')
  getLost(): string {
    return this.appService.getLost();
  }
}
