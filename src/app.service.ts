import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  entryPoint(): string {
    return JSON.stringify({
      visit: 'https://github.com/MaxiiXx23/cineasyApi',
      version: '0.0.1',
      name: 'cineasyApi',
    });
  }
}
