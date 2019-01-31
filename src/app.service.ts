import { Injectable } from '@nestjs/common';
import { InjectConfig, ModuleConfig } from 'nestjs-config';

@Injectable()
export class AppService {

  constructor(@InjectConfig() private readonly config: ModuleConfig) {
    this.config = config;
  }

  getHello(): string {
    return this.config.get('app.message');
  }
}
