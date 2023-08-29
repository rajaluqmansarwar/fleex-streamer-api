import { Module } from '@nestjs/common';
import { OutputController } from './output.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Output, OutputSchema } from './schema/output.schema';
import { OutputService } from './output.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Output.name, schema: OutputSchema }]),
  ],
  controllers: [OutputController],
  providers: [OutputService],
  exports: [],
})
export class OutputModule {}
