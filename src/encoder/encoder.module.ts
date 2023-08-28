import { Module } from '@nestjs/common';
import { EncoderController } from './encoder.controller';
import { EncoderService } from './encoder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Encoder, EncoderSchema } from './schema/encoder.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Encoder.name, schema: EncoderSchema }]),
  ],
  controllers: [EncoderController],
  providers: [EncoderService],
  exports: [],
})
export class EncoderModule {}
