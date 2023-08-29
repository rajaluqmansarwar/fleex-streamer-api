import { IsEnum, IsString } from 'class-validator';
import { Protocol, Streams } from '../enum/output.enum';
import { ApiProperty } from '@nestjs/swagger';

export class OutputDto {
  @ApiProperty({ type: String, enum: Protocol })
  @IsEnum(Protocol)
  @IsString()
  protocol: Protocol;

  @ApiProperty({ isArray: true, type: String, enum: Streams })
  @IsEnum(Streams)
  @IsString()
  streams: Streams[];
}
