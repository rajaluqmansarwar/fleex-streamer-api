import { Module } from '@nestjs/common';
import { EncoderController } from './encoder.controller';

@Module({
  imports: [],
  controllers: [EncoderController],
  providers: [],
  exports: [],
})
export class EncoderModule {}
