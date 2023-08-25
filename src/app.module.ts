import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SourceModule } from './source/source.module';

@Module({
  imports: [SourceModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
