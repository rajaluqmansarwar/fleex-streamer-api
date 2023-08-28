import { Controller, Get } from '@nestjs/common';

@Controller('encoder')
export class EncoderController {
  constructor() {}

  // Get encoder by id
  @Get('get/:id')
  getEncoderById() {
    return 'getEncoderById';
  }
}
