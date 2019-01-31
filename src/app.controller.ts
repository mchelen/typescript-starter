import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectConfig } from 'nestjs-config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectConfig() private readonly config,
    ) {
      this.config = config;
    }

  @Get()
  getHello(): string {
    const foo = this.config.src();
    console.log(foo);
    return this.appService.getHello();
  }
}
