import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

class IndexResponse {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): IndexResponse {
    return { message: this.appService.getHello() };
  }
}
