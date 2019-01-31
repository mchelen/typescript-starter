import { Injectable } from '@nestjs/common';
import {InjectConfig} from 'nestjs-config';

@Injectable()
export class AppService {

  constructor(@InjectConfig() private readonly config) {
    this.config = config;
  }

  getHello(): string {
    return this.config.get('app.message');
  }
}
