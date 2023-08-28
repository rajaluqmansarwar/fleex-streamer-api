import { Module } from '@nestjs/common';
import { SourceModule } from './source/source.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EncoderModule } from './encoder/encoder.module';
import { OutputModule } from './output/output.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        // uri: 'mongodb://127.0.0.1:27017/fleexStreamer',
      }),
      inject: [ConfigService],
    }),
    SourceModule,
    EncoderModule,
    OutputModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
