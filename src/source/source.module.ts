import { Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Source, SourceSchema } from './schema/source.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Source.name, schema: SourceSchema }]),
  ],
  controllers: [SourceController],
  providers: [SourceService],
  exports: [],
})
export class SourceModule {}
