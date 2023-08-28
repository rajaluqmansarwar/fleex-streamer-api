import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { codecAudio, codecVideo, encodingType } from '../enum/encoder.enum';

export class EncoderDto {
  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty({ enum: encodingType })
  @IsEnum(encodingType)
  @IsString()
  encoding: encodingType;

  @ApiProperty({ enum: codecAudio })
  @IsEnum(codecAudio)
  @IsString()
  codecAudio: codecAudio;

  @ApiProperty()
  @IsString()
  audioBitrate: number;

  @ApiProperty()
  @IsString()
  videoBitrate: number;

  @ApiProperty({ enum: codecVideo })
  @IsEnum(codecVideo)
  @IsString()
  codecVideo: codecVideo;

  @ApiProperty()
  @IsString()
  height: number;

  @ApiProperty()
  @IsString()
  width: number;
}
